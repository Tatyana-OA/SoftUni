function addItem() {
    let inputField = document.getElementById('newItemText').value;
    let newLi = document.createElement('li')
    newLi.textContent = inputField
    document.getElementById('items').appendChild(newLi)
    document.getElementById('newItemText').value = ''
}
