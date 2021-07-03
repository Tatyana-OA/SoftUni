import {cats as catsArr} from './catSeeder.js'
import {html,render} from '../node_modules/lit-html/lit-html.js'

const styles = {

}

const parentSection = document.getElementById('allCats')

const cattoTemplato = (data) => html`
 <ul @click="${onClick}">
     ${data.map(catto => html`
     <li id="${catto.id}">
         <img src="./images/${catto.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="100">
                        <h4>Status Code: ${catto.statusCode}</h4>
                        <p>${catto.statusMessage}</p>
                    </div>
                </div>
            </li>
            `)}
            
 </ul>`
function onClick(e) {
    if (e.target.tagName=='BUTTON') {
       const catId = e.target.parentNode.parentNode.id
       const toggleStuff = document.getElementById(catId).querySelector('div.status')
       console.log(toggleStuff.style.display)
       debugger
      if (toggleStuff.style.display=='none')  {
        e.target.textContent = 'Hide status code'
        toggleStuff.style.display='block'
      } else if (toggleStuff.style.display=='block'){
          e.target.textContent = 'Show status code'
        toggleStuff.style.display='none'
      }
      
    }
    
}
render(cattoTemplato(catsArr),parentSection)
//statusMessage
