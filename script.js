const menuPhone = document.getElementById('menu');
const buttonsPhone = document.querySelector('.buttons_phone');

  menuPhone.addEventListener('click', () => {
    buttonsPhone.classList.toggle('show');
  });