function attachEvents() {

    document.getElementById('btnLoad').addEventListener('click',loadPhonebook)
    document.getElementById('btnCreate').addEventListener('click',createEntry)

}
attachEvents();
async function loadPhonebook() {
    let phonebookUl = document.getElementById('phonebook')
    phonebookUl.innerHTML=''
    const url = 'http://localhost:3030/jsonstore/phonebook'
    const response = await fetch (url)
    const phoneList = await response.json()
    Object.entries(phoneList).forEach(entry => {
        let key = entry[0]
        let [person, phone] = Object.values(entry[1])
        let personLi = createElement('li',`${person}: ${phone}`,key)
        let delBtn = createElement('button','Delete')
        delBtn.addEventListener('click',deleteEntry)
        personLi.appendChild(delBtn)
        phonebookUl.appendChild(personLi)
        
    });
}
    async function deleteEntry(e) {
    let entryToDelete = e.target.parentNode.className
    const delResponse = await fetch('http://localhost:3030/jsonstore/phonebook/'+ entryToDelete,{
    method: 'delete'})
    e.target.parentNode.remove()

   // console.log(await delResponse.json())

}
async function createEntry(entry) {

   entry = {
        "person":`${document.getElementById('person').value}`,
        "phone":`${document.getElementById('phone').value}`
    }
    const result = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(entry)
    })
    document.getElementById('person').value = ''
    document.getElementById('phone').value=''
return result;

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
