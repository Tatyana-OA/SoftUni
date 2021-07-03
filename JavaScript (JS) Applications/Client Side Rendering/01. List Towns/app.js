import { html, render } from "../node_modules/lit-html/lit-html.js";
document.querySelector('button').addEventListener('click',onSubmit)
const listTemplate = (data) => html `
<ul>
${data.map((t) => html`<li>${t}</li>`)}
</ul>`

 function onSubmit(e) {

    e.preventDefault()
    const root = document.querySelector('#root')
    let inputField = document.getElementById('towns').value
    const towns=inputField.split(',')
    console.log(towns)

render(listTemplate(towns),root)
document.getElementById('towns').value = ''
    
}


