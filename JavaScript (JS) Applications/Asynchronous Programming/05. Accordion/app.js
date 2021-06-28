function solution() {
   getList()
}

async function getList() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    data.forEach(article => {
       
        let title = article.title;
        let id=article._id

        let accordion = createElement('div','','accordion')
        let head = createElement('div','','head')
        let spanName = createElement('span',title)
        let moreBtn = createElement('button','More','button')
        moreBtn.setAttribute('id',id)
        document.querySelector('#main').appendChild(accordion)
        accordion.appendChild(head)
        head.appendChild(spanName)
        head.appendChild(moreBtn)
        moreBtn.addEventListener('click',showMore)
    
        
    })
    
}
 async function showMore(e) {
    let extraDiv = createElement('div','','extra')
    //console.log(e.target.textContent)
    if (e.target.textContent=='Less') {
        e.target.parentNode.parentNode.querySelector('.extra').remove()
        e.target.textContent='More'
        return;
    }
    extraDiv.style.display = "block"
    e.target.textContent='Less'
       console.log(`works`,)
       let id = e.target.id
        let articleUrl = `http://localhost:3030/jsonstore/advanced/articles/details/` + id
           const responseMore = await fetch(articleUrl)
           const dataMore = await responseMore.json()
           const dataContent = dataMore.content
     
       let extraP = createElement('p',dataContent)
       extraDiv.appendChild(extraP)
       e.target.parentNode.parentNode.appendChild(extraDiv)
    
    

 
      
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

solution()


// <!-- <div class="accordion">
// <div class="head">
//     <span>Scalable Vector Graphics</span>
//     <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
// </div>
// <div class="extra">
//     <p>Scalable Vector Graphics .....</p>
// </div>
// </div> -->
