function addItem() {
    let button = document.querySelector('input[type="button"]')

    let textInput = document.getElementById('newItemText')
    let valueInput = document.getElementById('newItemValue')
        let option = document.createElement('option')
        option.textContent = textInput.value
        option.value = valueInput.value;
        let selectItem = document.querySelector('#menu')
        selectItem.appendChild(option)

        document.getElementById('newItemText').value = ''
        document.getElementById('newItemValue').value = ''
   
      

}
