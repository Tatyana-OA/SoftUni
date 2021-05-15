function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick(searchText) {
      searchText = document.getElementById('searchField').value;
      let tableItems =document.querySelectorAll('tbody tr')
      for (item of tableItems) {
         item.removeAttribute("class","select")
      }
      for (item of tableItems) {
         let itemText = item.textContent;
         if (itemText.toLowerCase().includes(searchText.toLowerCase())) {
            item.setAttribute("class","select")
         }
      }
      document.getElementById('searchField').value = ''
   }
   
}
