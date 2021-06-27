function lockedProfile() {
    // document.querySelector('main').innerHTML=''
window.addEventListener('load',getUsers)
const userProfileTemplate = document.querySelector('.profile')
let cloneDiv;
async function getUsers() {

    const mainSection = document.querySelector('main')
    const url = 'http://localhost:3030/jsonstore/advanced/profiles'
    const request = await fetch(url)
    const data = await request.json()
    let datToArr=  Object.values(data)
    for (let i= 0; i<datToArr.length; i++)
    {
        let user = datToArr[i]
        cloneDiv = document.querySelector('.profile').cloneNode( true )
        mainSection.appendChild(cloneDiv)
        cloneDiv.querySelector('input[name="user1Username"]').value = user.username
        cloneDiv.querySelector('input[name="user1Email"]').value = user.email
        cloneDiv.querySelector('input[name="user1Age"]').value = user.age
        let [radioLock,radioUnlock] = Array.from(cloneDiv.querySelectorAll('input[type="radio"]'))
        radioUnlock.addEventListener('change',unlockProfile)
        radioLock.addEventListener('change',lockProfile)

        function unlockProfile(e) {
            if (e.target.checked=true) {
                e.target.parentNode.querySelector('button').addEventListener('click',showMore)
            } 
        }
        function lockProfile(e) {
            if (e.target.checked=true) {
                e.target.parentNode.querySelector('#user1HiddenFields').style.display='none'
                e.target.parentNode.querySelector('button').removeEventListener('click',showMore)
            }
        }
         
    }
    userProfileTemplate.style.display='none'
 
}

function showMore(e) {
    let hiddenFields = e.target.parentNode.querySelector('#user1HiddenFields')

    hiddenFields.style.display==="block"? hiddenFields.style.display="none" :hiddenFields.style.display="block"
}
}



            
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
        
