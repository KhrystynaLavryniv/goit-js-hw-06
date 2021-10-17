const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const controlsRef = document.querySelector('#controls')
const inputRef = document.querySelector('#controls input')
const boxesRef = document.querySelector('#boxes')

const createBoxes = (amount) => {
  amount = inputRef.value;

  for (let i = 0; i < amount; i += 1) {
    const basicSize = 30;
    const biggestSize = basicSize + i * 10;
    const box = document.createElement('div');
    box.setAttribute('style', `width: ${biggestSize}px; height: ${biggestSize}px; background: ${getRandomHexColor()}`
    );
    boxesRef.append(box);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const destroyBoxes = () => {
  inputRef.value = '';
  boxesRef.innerHTML = '';
}
createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)
