const body = document.body;
const changeColorRef = document.querySelector('.change-color');
const colorValue = document.querySelector('.color')

changeColorRef.addEventListener('click', (event) => {
  const currentColor = getRandomHexColor();
  body.setAttribute('style', `background:${currentColor}`)
  colorValue.textContent = currentColor
})
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
