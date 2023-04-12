// //tablet+
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-buynow-open]'),
    closeModalBtn: document.querySelector('[data-modal-buynow-close]'),
    modal: document.querySelector('[data-modal-buynow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

//mobile
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-mob-buy]'),
    closeModalBtn: document.querySelector('[data-modal-close-mob-buy]'),
    modal: document.querySelector('[data-modal-mob-buy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
