let counterValue = 0

const btnIncrementRef = document.querySelector('[data-action="increment"]')
const btnDecrementRef = document.querySelector('[data-action="decrement"]')
const valueRef = document.querySelector('#value')

btnIncrementRef.addEventListener('click', () => {
    valueRef.textContent = counterValue+=1;
});

btnDecrementRef.addEventListener('click', () => {
    valueRef.textContent = counterValue-=1;
});
