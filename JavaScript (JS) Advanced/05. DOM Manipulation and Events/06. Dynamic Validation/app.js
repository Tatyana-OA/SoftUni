function validate() {
    let emailField = document.querySelector('#email')
    emailField.addEventListener('change', onChange)
    let validation = /^[a-z]+@[a-z]+\.[a-z]+$/gm
  
    function onChange(ev) {
        let isValid = validation.test(emailField.value)
        if (isValid) {
           ev.target.className = ''
        } else {
            ev.target.className = 'error'
        }
    }
}
