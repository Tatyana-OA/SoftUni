import {html,render} from '../node_modules/lit-html/lit-html.js'
function addItem() {
    console.log('TODO:...');
    window.addEventListener('load',loadInfo())
    document.querySelector('form').addEventListener('submit',formSubmit)
    
}
function renderTemplate (data) {
const menu = document.getElementById('menu')
const optioNtemplate = (data) => data.map(d=> html `<option value="${d._id}">${d.text}</option>`)
render (optioNtemplate(data),menu)
}
async function loadInfo() {
const request = await fetch('http://localhost:3030/jsonstore/advanced/dropdown')
const data = await request.json()
const optionsArray = Object.values(data)
renderTemplate(optionsArray)
}
async function formSubmit(e) {
    e.preventDefault()
    const textField = e.target.querySelector('#itemText')
    const postRequest = await fetch('http://localhost:3030/jsonstore/advanced/dropdown',{
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({text:textField.value})
    
    })
    const response = await postRequest
    const data = await response.json()
    if (response.ok) {
        loadInfo()
        textField.value =''
        return alert('Entry added successfully.')
    }
   
}
addItem()
