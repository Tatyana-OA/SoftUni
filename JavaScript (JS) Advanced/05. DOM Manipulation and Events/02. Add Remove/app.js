function addItem() {
    let inputField = document.getElementById('newText').value;
    let newLi = document.createElement('li')
    newLi.textContent = inputField;
    document.getElementById('items').appendChild(newLi)
    document.getElementById('newText').value = ''
     //create new element - a (anchor tag)
     let deleteLink = document.createElement('a')
     // set its text - Delete
     let deleteText = document.createTextNode("[Delete]")
     // set the delete text to be a "child" of the a-tag
     deleteLink.appendChild(deleteText)
     // set the link behind the a.href -> this case not an actual link
     deleteLink.href = '#'
     // append it to the targeted li
     newLi.appendChild(deleteLink)
        
// add onclick listener for each a tag (a.k.a the delete link)
    Array.from(document.querySelectorAll('a')).forEach(a => {
        a.addEventListener('click', onClick)
    })
// remove the parent of every event target => the parent of every a, which is the li itself
   function onClick(ev) {
     ev.target.parentNode.remove() 
        
    }
}
