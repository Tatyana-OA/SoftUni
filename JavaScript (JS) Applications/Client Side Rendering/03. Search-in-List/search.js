import {towns as townsArr} from './towns.js'
import {html,render} from '../node_modules/lit-html/lit-html.js'
function search() {
   const parentDiv = document.getElementById('towns')
   document.querySelector('button').addEventListener('click',onSearch)
   //a single item and its supposed match
   const liTemplate = (data)=> html`
   <ul>
   ${data.map(d=>html`<li>${d}</li>`)}
   </ul>`
   render(liTemplate(townsArr),parentDiv)
}

function onSearch() {
   const matches = []
   let lis = Array.from(document.querySelectorAll('li'))
   lis.forEach(li => {li.classList.remove('active')})
   document.querySelector('#result').innerHTML = ''
   let match =document.getElementById('searchText').value
   townsArr.forEach(town => {
      if(town.toLowerCase().includes(match.toLowerCase())) {
        matches.push(town)
        lis.forEach(li => {if (li.textContent==town) {li.classList.add('active')}})

      }
   })
   const matchLogic = matches.length==1? 'match' : 'matches'
   document.querySelector('#result').textContent=`${matches.length} ${matchLogic} found.`
   document.getElementById('searchText').value =''
 
}
search()
