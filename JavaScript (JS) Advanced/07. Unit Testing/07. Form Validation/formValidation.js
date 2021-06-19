function validate() {
let [userName,email,password,confirmPass,company,companyNum] = Array.from(document.querySelectorAll('input'))
let compnayInfoField = document.getElementById('companyInfo')
let submitBtn = document.querySelector('#submit')
let form  = document.querySelector('#registerForm')
let userNameRegExp = /^[A-Za-z\d]{3,20}$/gm
let passRegExp = /^[\w]{5,15}$/gm
submitBtn.addEventListener('click', onSubmit)
company.addEventListener('change', onChange)
function onChange (e) {
    if (e.target.checked == true) {
 compnayInfoField.style.display = 'block' 
} else {
    compnayInfoField.style.display = 'none'
}
}

function onSubmit(e) {
    e.preventDefault()
    if (e.target===submitBtn) {
        // validation of all fields
let validUserName = userNameRegExp.test(userName.value) 
let validPassword = passRegExp.test(password.value) 
let trigger = false;
if (!validUserName || userName.value == '') { userName.style.borderColor = 'red'; trigger = true} else {userName.style.borderColor = 'none'}
console.log(validUserName)
if (!(email.value.includes('@') && email.value.includes('.') && email.value.indexOf('@')<email.value.indexOf('.')) || email.value == '') {email.style.borderColor = 'red'; trigger = true} else {email.style.borderColor = 'none'}
if (!validPassword || password.value == '' || password.value!==confirmPass.value) {password.style.borderColor='red'; trigger = true} else {password.style.borderColor='none'}
if (password.value!==confirmPass.value || confirmPass.value == '' || !validPassword) {confirmPass.style.borderColor='red'; trigger = true} else {confirmPass.style.borderColor='none'}

// div valid requirement
let divValid = document.getElementById('valid')
if (company.checked===true) {
    if (companyNum.value<1000 || companyNum.value>9999) {
        companyNum.style.borderColor = 'red'
        trigger = true
    } else {
        companyNum.style.borderColor = 'none'
    }
}
if (trigger) {
    divValid.style.display = 'none';  
  } else {
      divValid.style.display = 'block'
  }


    }
}

}

