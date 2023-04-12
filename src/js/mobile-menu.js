(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const buyNowBtn = document.querySelector('.buy-now-button--mobile');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  buyNowBtn.addEventListener('click', toggleMenu);
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  // При клике на ссылку навигации в мобильном меню закрываем мобильное меню
  const closeMobileBtn = document.querySelectorAll('.menu-nav__link');
  closeMobileBtn.forEach(function (item) {
    item.addEventListener('click', function (e) {
      const menu = document.querySelector('#mobile-menu');
      menu.classList.remove('is-open');
      bodyScrollLock.enableBodyScroll(document.body);
    });
  });
})();
