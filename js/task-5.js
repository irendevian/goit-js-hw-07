function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('button');
const span = document.querySelector('.color')

button.addEventListener('click', () => {

  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
});


