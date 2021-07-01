function login() {
    const [registerForm,loginForm] = document.querySelectorAll('form')
    loginForm.addEventListener('click',login)
    registerForm.addEventListener('click',register)
    async function login(e) {
    e.preventDefault()
    if (e.target.tagName == 'BUTTON') {
        let loginFields = new FormData(loginForm)
        let email = loginFields.get('email')
        let password = loginFields.get('password')
       
            const request = await fetch ('http://localhost:3030/users/login',{
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({"email":email,"password":password})
            })
            const response = await request.json()
            console.log(response)
            if (response.accessToken) {
                sessionStorage.setItem('authToken',response.accessToken)
                sessionStorage.setItem('userId',response._id)
                window.location = 'index.html'
                
                
            }
            if (response.message) {
                return alert(`${response.message}`)
            }   
    
    }

    }
    async function register(e) {
        e.preventDefault()
        if (e.target.tagName == 'BUTTON') {
            let registerFields = new FormData(registerForm)
            let email = registerFields.get('email')
            let password = registerFields.get('password')
            let repassword = registerFields.get('rePass')
           
                const request = await fetch ('http://localhost:3030/users/register',{
                    method: 'post',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({"email":email,"password":password})
                })
                const response = await request.json()
                console.log(response)
                if (response.accessToken) {
                    let userId = response._id
                    let userToken = response.accessToken
                    window.location = 'index.html'
                }
                if (response.message) {
                    return alert(`${response.message}`)
                }   
        
        }
        
    }
}

login()

function createElement(type,textContent,className) {
    let element = document.createElement(type)
    if (textContent) {
        element.textContent = textContent
    }
            
    if (className) {
        element.className = className
    }
    
    return element;
    }
