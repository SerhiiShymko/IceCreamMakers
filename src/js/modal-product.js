(() => {
  const refs = {
    openIceCream: document.querySelector('[data-modal__open--product-cream]'),
    closeIceCream: document.querySelector('[data-modal__close--product-cream]'),
    iceCreamModal: document.querySelector('[data-modal__product-cream]'),


    openIceCoffee: document.querySelector(
      '[data-modal__open--product-icecoffee]'
    ),
    closeIceCoffee: document.querySelector(
      '[data-modal__close--product-icecoffee]'
    ),
    iceCoffeeModal: document.querySelector('[data-modal__product-icecoffee]'),


    openMilkShakes: document.querySelector(
      '[data-modal__open--product-milkshakes]'
    ),
    closeMilkShakes: document.querySelector(
      '[data-modal__close--product-milkshakes]'
    ),
    milkShakesModal: document.querySelector('[data-modal__product-milkshakes]'),
  };

  refs.openIceCream.addEventListener('click', toggleIceCream);
  refs.closeIceCream.addEventListener('click', toggleIceCream);

  refs.openIceCoffee.addEventListener('click', toggleIceCoffee);
  refs.closeIceCoffee.addEventListener('click', toggleIceCoffee);

  refs.openMilkShakes.addEventListener('click', toggleMilkShakes);
  refs.closeMilkShakes.addEventListener('click', toggleMilkShakes);

  function toggleIceCream() {
    refs.iceCreamModal.classList.toggle('is-hidden');
  }

  function toggleIceCoffee() {
    refs.iceCoffeeModal.classList.toggle('is-hidden');
  }

  function toggleMilkShakes() {
    refs.milkShakesModal.classList.toggle('is-hidden');
  }
})();
