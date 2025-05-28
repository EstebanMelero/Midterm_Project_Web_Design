/*INITIALIZATION*/

const menuPhone = document.getElementById('menu'); /*Get the phone part*/
const buttonsPhone = document.querySelector('.buttons_phone');

/*FUNCTION*/

/*Add the function to display the buttons*/
  menuPhone.addEventListener('click', () => {
    buttonsPhone.classList.toggle('show'); /*Toggle limits it to one function*/
  });

/*Add the display from the small*/

document.querySelectorAll('.small').forEach(small => {
      small.addEventListener('click', () => {
        const displayId = small.getAttribute('display-number'); /*Get the variable in the small*/
        const display = document.getElementById(displayId); /*Find the display*/
        display.style.display = 'flex'; /*Display the display*/
      });
    });

/*Close button for the display*/

document.querySelectorAll('.display').forEach(display => { /*Get all display*/
      display.querySelector('.close').addEventListener('click', () => { /*Get the close in each*/
        display.style.display = 'none'; /*Remove the display*/
      });
    
      display.addEventListener('click', (e) => {
        if (e.target === display) { /*If the user clicks outside the white box*/
          display.style.display = 'none'; /*Remove the display as well*/
        }
      });
    });