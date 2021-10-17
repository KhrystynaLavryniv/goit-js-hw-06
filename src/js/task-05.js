const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInput);
function onInput(event) {
  if (inputRef.value === "") {
    return outputRef.textContent = 'Anonymous'
  }
   outputRef.textContent = event.currentTarget.value
}
 
 