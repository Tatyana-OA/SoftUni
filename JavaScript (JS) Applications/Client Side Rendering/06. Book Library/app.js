import { html, render } from "../node_modules/lit-html/lit-html.js";

const body = document.querySelector('body')
const btnSect = document.getElementById('buttons')
const loadBtn = createElement('button','LOAD ALL BOOKS','','loadBooks')
// btnSect.appendChild(loadBtn)
loadBtn.addEventListener('click',loadBooks)

const btnSection = (btn) => html `<section id='buttons'>${btn}</section> <main></main>`
render(btnSection(loadBtn),body)

const tableOutline = (data) => html `
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        ${data.map(d=>html`<tr id="${d._id}">
                <td>${d.title}</td>
                <td>${d.author}</td>
                <td @click=${clickHandler}>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>`)}
        </tbody>
    </table>
    <section id='formSection'>${formTemplate('addForm','Add book','Submit',"","")}</section>
`

const formTemplate = (formId,formTitle,btnTitle,nameValue,authorValue) => html `
    <form @click=${formHandler} id="${formId}">
        <h3>${formTitle}</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." value="${nameValue}">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." value="${authorValue}">
        <input type="submit" value="${btnTitle}">
    </form>

` 
let targetBook;
let targetId; 
function clickHandler(e) {
     targetBook = e.target.parentNode.parentNode
     targetId = targetBook.id
 if (e.target.textContent=='Edit') {
     const [name,author] = Array.from(targetBook.querySelectorAll('td'))
     render(formTemplate('editForm','Edit book','Save',name.textContent,author.textContent),document.getElementById('formSection'))

 } else if (e.target.textContent='Delete') {
    if (targetId=='undefined') {
        return alert ('Cannot delete a book you did not create')
    } else {
        deleteBook(targetId)
        alert('Deleted')
        return targetBook.remove()
        
    }
 }
}
function formHandler(e) {
    e.preventDefault()
    const [title,author] = Array.from(document.querySelectorAll('form input'))
    const bookData = {
        author:author.value,
        title:title.value
        
    }
   if (e.target.value=='Submit') {
    e.target.parentNode.reset()
     addBook(bookData)
     loadBooks()
     return alert('Success')
   }  else if (e.target.value=='Save') {
     editBook(bookData,targetId)
     e.target.parentNode.reset()
     render(formTemplate('addForm','Add book','Submit',"",""),document.getElementById('formSection'))
     
   }
          
} 


async function loadBooks() {
const response = await fetch("http://localhost:3030/jsonstore/collections/books");
  const data = await response.json();
  const list = Object.values(data);
  render(tableOutline(list),document.querySelector('main'))
}

async function addBook(bookInfo) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books',{
    method: 'post',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(bookInfo)
})
loadBooks()
console.log(await response.json())

      
}
async function editBook(bookInfo,bookId) {
    if (bookId=='undefined') {
        return alert ('Cannot edit book if not its author')
    }
    const url = 'http://localhost:3030/jsonstore/collections/books/' + bookId
    const response = await fetch(url,{
    method: 'put',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(bookInfo)
})
loadBooks()
}
async function deleteBook(bookId) {

    const url = 'http://localhost:3030/jsonstore/collections/books/' + bookId
    const response = await fetch(url,{
        method: 'delete'})
        console.log(await response.json())
        render(formTemplate('addForm','Add book','Submit',"",""),document.getElementById('formSection'))
}


function createElement(type,textContent,className,id) {
    let element = document.createElement(type)
    if (textContent) {
        element.textContent = textContent
    }
            
    if (className) {
        element.className = className
    }
    if (id) {
        element.id = id
    }
    
    return element;
    }


