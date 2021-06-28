function attachEvents() {
    console.log('TODO...');
    document.getElementById('btnLoadPosts').addEventListener('click',getPosts)
    document.getElementById('btnViewPost').addEventListener('click',getView)
    let obtainedPosts = {}
    async function getPosts() {
        if (Array.from(document.querySelectorAll('option')).length<=0) {
            const url = `http://localhost:3030/jsonstore/blog/posts`
            const response = await fetch(url)
            const postsData = await response.json()
            obtainedPosts=Object.values(postsData)
            obtainedPosts.forEach(element => {
                let postId = element.id;
                let postName = element.title;
                let postBody = element.body;
                let newOption = createElement('option',postName,postId)
                document.getElementById('posts').appendChild(newOption)
            });
        }
       
        }
        async function getView() {
            document.getElementById('post-title').innerHTML = ''
            document.getElementById('post-body').innerHTML = ''
            document.getElementById('post-comments').innerHTML =''
        let requestedId;
        let selectedPost;
        document.querySelectorAll('option').forEach(option=> {if (option.selected==true) {requestedId=option.value}})
        for (let post of obtainedPosts) {
            if (post.id==requestedId) {
                selectedPost = post;
            }
        }
        document.getElementById('post-title').textContent=selectedPost.title
        document.getElementById('post-body').appendChild(createElement('p',selectedPost.body))
        const url = `http://localhost:3030/jsonstore/blog/comments`
        const responseComments = await fetch(url)
        const commentsData = await responseComments.json()
        let displayComments = []
        Object.values(commentsData).forEach(comment => {
            if (comment.postId == selectedPost.id) {
                displayComments.push(comment.text)
            }
        })
        displayComments.forEach(comm=> {document.getElementById('post-comments').appendChild(createElement('li',comm))})
        }
}


attachEvents();



function createElement(type,textContent,value,className) {
    let element = document.createElement(type)
    if (textContent) {
        element.textContent = textContent
    }
            
    if (className) {
        element.className = className
    }
    if (value) {
        element.value = value;
    }
    
    return element;
    }
