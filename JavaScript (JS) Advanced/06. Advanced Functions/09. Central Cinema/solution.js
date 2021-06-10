function solve() {
let onScreenBtn = document.querySelector('button')
document.querySelector('body').addEventListener('click', onClickScreen)
document.querySelector('ul').addEventListener('click', archiveMovie)
let archiveSection = document.querySelector('#archive ul')
let clearBtn = document.querySelector('#archive button')
clearBtn.addEventListener('click', clearItAll)
let [nameField,hallFeild,ticketField] = Array.from(document.querySelectorAll('#container input'))
let moviesSection = document.querySelector('ul')
let totalAmt = 0;
function onClickScreen(ev) {
    ev.preventDefault()

    if (ev.target === onScreenBtn && nameField.value.length>0 && hallFeild.value.length>0 && Number(ticketField.value) >0) {

        let movieLi = document.createElement('li')
        let spanTitle = document.createElement('span')
        let HallStrong = document.createElement('strong')
        let movieDiv = document.createElement('div')
        let priceStrong = document.createElement('strong')
        let inputField = document.createElement('input')
        let movieButton = document.createElement('button')
            //append them to one another
        moviesSection.appendChild(movieLi)
        movieLi.appendChild(spanTitle)
        spanTitle.innerHTML = nameField.value
        movieLi.appendChild(HallStrong)
        HallStrong.innerHTML=hallFeild.value
        movieLi.appendChild(movieDiv)
        movieDiv.appendChild(priceStrong)
        priceStrong.innerHTML =ticketField.value
        movieDiv.appendChild(inputField)
        inputField.placeholder = 'Tickets Sold'
        movieDiv.appendChild(movieButton)
        movieButton.innerHTML = 'Archive'
        totalAmt=Number(ticketField.value);

        nameField.value = ''
        ticketField.value = ''
        hallFeild.value = ''
    }

}

function archiveMovie (ev) {
    if (ev.target.tagName==='BUTTON') {
        let respectiveInput = ev.target.parentNode.querySelector('input').value 
        if (Number(respectiveInput)>0) {
            console.log(`yes`)
            let liToRemove = ev.target.parentNode.parentNode
            totalAmt*=Number(respectiveInput)
            liToRemove.querySelector('strong').innerHTML = `Total amount: ${totalAmt.toFixed(2)}`
            liToRemove.querySelector('button').innerHTML = `Delete`
            liToRemove.querySelector('button').addEventListener('click',onDelete)
            archiveSection.appendChild(liToRemove)
            liToRemove.querySelector('div strong').remove()
            liToRemove.querySelector('div input').remove()
        }
        
   
    }
    
}
function onDelete (ev) {
    let liToRemove = ev.target.parentNode.parentNode
    liToRemove.remove()
}
function clearItAll (ev) {
        archiveSection.innerHTML = ''
}


}
