const inputRef = document.querySelector('#validation-input');
const validationLength = parseInt(inputRef.dataset.length);


const validation = (event) => {
    if (event.currentTarget.value.length === validationLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.replace('invalid', 'valid');
    }else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.replace('valid', 'invalid');
  }
};

inputRef.addEventListener('blur', validation);