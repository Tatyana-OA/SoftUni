function create(words) {
   words.forEach(word => {
      let div = document.createElement('div')
      document.getElementById('content').appendChild(div)
      let paragraph = document.createElement('p')
      div.appendChild(paragraph)
      paragraph.textContent = word;
      paragraph.style.display = 'none'
   });

   //event is attached to the bigger div 
   document.getElementById('content').addEventListener('click', onClick)

   function onClick(e) {
      // if the clicked element is not the element to which the listener is originally attacked
     if (e.target != e.currentTarget) {
       let paragraph = e.target.children[0]
       paragraph.style.display = 'block'
     }
   }
}
