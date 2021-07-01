
function addListeners() {
const cancelBtn = document.querySelector('.cancel').addEventListener('click',cancelEntry)
const postBtn = document.querySelector('.public').addEventListener('click',addEntry)
window.addEventListener('load',loadAdditionalEntries)
//starting display of additional info
//const hiddenDiv = document.getElementById('topicInfo').style.display='none'
document.querySelector('main').addEventListener('click',revealInfo)
document.querySelector('nav a').addEventListener('click', () => {
    window.location = 'index.html'
})
let topicContent;
let commentForm;
let currentInfo;
let targetID;
 
}
async function addEntry(ev) {
    ev.preventDefault()
    let newTopic = {
        title: document.querySelector('#topicName').value,
        username:document.querySelector('#username').value,
        post:document.querySelector('#postText').value
    }
    if (newTopic.title!='' && newTopic.username!='' && newTopic.post!='') {

        const request = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(newTopic)
        })
        const response = await request.json()
        console.log(response)
    }
    else {
        return alert('Please fill in all fields.')
    }
loadAdditionalEntries()
}
async function loadAdditionalEntries() {
    let parent = document.querySelector('.addedTopics')
    parent.innerHTML=''
   currentInfo = document.querySelector('#topicInfo')
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts'
    const response = await fetch (url)
    const data = await response.json()
    Object.values(data).forEach(element => {
        let domEntry = `<div class="topic-container" id="${element._id}">
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <a href="#" class="normal">
                    <h2>${element.title}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${element.username}</span></p>
                        </div>
                    </div>
                    <div class="subscribers">
                        <!-- <button class="subscribe">Subscribe</button> -->
                        <p>Subscribers: <span>0</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>`

   topicContent = createElement('div','','topic-content')
   topicContent.setAttribute('id',element._id)
    let additionals = `<div class="topic-title">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <h2>${element.title}</h2>
                    <p>Date: <time>2020-10-10 12:08:28</time></p>
                </div>
                <div class="subscribers">
                    <p>Subscribers: <span>0</span></p>
                    <!-- <button class="subscribe">Subscribe</button>
                    <button class="unsubscribe">Unsubscribe</button> -->
                </div>
            </div>
        </div>
        <!-- comment  -->
        <div class="comment">
            <header class="header">
                <p><span>${element.username}</span> posted on <time>2020-10-10 12:08:28</time></p>
            </header>
            <div class="comment-main">
                <div class="userdetails">
                    <img src="./static/profile.png" alt="avatar">
                </div>
                <div class="post-content">
                    <p>${element.post}</p>
 
                </div>
            </div>
            <div class="footer">
                <p><span>0</span> likes</p>
            </div><div class='additionalComments'></div>`

        commentForm = `<div class="answer-comment">
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>
    </div>
</div>`
   
    parent.innerHTML+=domEntry
    document.querySelector('#topicName').value = ''
    document.querySelector('#username').value = ''
    document.querySelector('#postText').value = ''
    currentInfo.appendChild(topicContent)
    topicContent.style.display='none'
    topicContent.innerHTML +=additionals
    topicContent.innerHTML+=commentForm
  
    });
   
}

async function cancelEntry(e) {
    e.preventDefault()
 document.querySelector('#topicName').value = ''
document.querySelector('#username').value = ''
document.querySelector('#postText').value = ''
}
async function revealInfo(e) {
    e.preventDefault()
   
     if (e.target.tagName =="H2") {
         targetID = e.target.parentNode.parentNode.parentNode.parentNode.id
         document.querySelector('main').style.display='none'
        Array.from(currentInfo.children).forEach(child => {if(child.id==targetID){child.style.display='block'}
    child.querySelector('form').addEventListener('submit',postComment)
    })
     }
    
   
}
async function postComment(e) {
    let parentDiv = e.target.parentNode.parentNode.parentNode;
    e.preventDefault()
    const form = new FormData(e.target)
    let comment = form.get('postText')
    let user = form.get('username')
    let commentData;
    if (comment!='' && user!='') {
        commentData = {
            comment,
            user,
            topicId: parentDiv.id
    
        }
    }else {
        return alert('Please fill in all fields.')
    }
    parentDiv.querySelector('.additionalComments').innerHTML=''
    const request = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(commentData)
        })
        const response = await request.json()
        console.log(response)
        e.target.reset()
        const requestComments = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments')
        const responseComments = await requestComments.json()
       // document.getElementById(targetID).innerHTML=''
        Object.values(responseComments).forEach(comm => {
            if (comm.topicId==targetID) {
            let newCommentDiv = createElement('div','','comment')
               let newComment = `<header class="header">
                   <p><span>${comm.user}</span> posted on <time>2020-10-10 12:08:28</time></p>
               </header>
               <div class="comment-main">
                   <div class="userdetails">
                       <img src="./static/profile.png" alt="avatar">
                   </div>
                   <div class="post-content">
                       <p>${comm.comment}</p>
    
                   </div>
               </div>
               <div class="footer">
                   <p><span>0</span> likes</p>` 
                   newCommentDiv.innerHTML=newComment
            console.log(newCommentDiv)
           parentDiv.querySelector('.additionalComments').appendChild(newCommentDiv)
              
            }
           
        })
       
    }
  


   
addListeners()
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
