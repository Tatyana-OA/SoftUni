function toggle() {
    let moreButton = document.querySelector('.button')
    let expandText = document.querySelector('#extra')
   if (moreButton.textContent==='More') {
    moreButton.textContent = 'Less'
    expandText.style.display = 'block'
   } else {
       moreButton.textContent = 'More'
       expandText.style.display = 'none'
   }

}
