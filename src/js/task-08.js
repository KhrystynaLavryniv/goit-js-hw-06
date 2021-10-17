const loginFormRef = document.querySelector('.login-form')

const onSubmit = (event) => {
    event.preventDefault()
const  email = loginFormRef.elements.email.value
const password = loginFormRef.elements.password.value

    if (!email || !password) 
        return alert('Bсе поля должны быть заполнены');
        console.log({email, password});
    
    loginFormRef.reset()
}

loginFormRef.addEventListener('submit', onSubmit);
