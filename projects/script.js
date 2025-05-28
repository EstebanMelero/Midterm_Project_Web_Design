const menuPhone = document.getElementById('menu');
const buttonsPhone = document.querySelector('.buttons_phone');

  menuPhone.addEventListener('click', () => {
    buttonsPhone.classList.toggle('show');
  });

document.querySelectorAll('.small').forEach(small => {
      small.addEventListener('click', () => {
        const displayId = small.getAttribute('display-number');
        const display = document.getElementById(displayId);
        display.style.display = 'flex';
      });
    });

document.querySelectorAll('.display').forEach(display => {
      display.querySelector('.close').addEventListener('click', () => {
        display.style.display = 'none';
      });
    
      display.addEventListener('click', (e) => {
        if (e.target === display) {
          display.style.display = 'none';
        }
      });
    });