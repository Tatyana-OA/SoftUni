function lockedProfile() {
   let main = document.querySelector('main')
   main.addEventListener('click', onClick)

   function onClick(ev) {
       if (ev.target.tagName === 'BUTTON') {
        let respectiveDiv = ev.target.parentNode;
        let hiddenInfo = respectiveDiv.querySelector('div')
        let lockedButton =respectiveDiv.querySelector('input[value="lock"]')
        let unlockedButton = respectiveDiv.querySelector('input[value="unlock"]')
        let button =  respectiveDiv.querySelector('button')
        if (lockedButton.checked !== true) {
            hiddenInfo.style.display === 'block' ? hiddenInfo.style.display = 'none' : hiddenInfo.style.display = 'block'
            if (hiddenInfo.style.display === 'block') {
                button.textContent = 'Hide it'
            } else {
                button.textContent = 'Show more'
            }
            
        } 
   }
}
}
