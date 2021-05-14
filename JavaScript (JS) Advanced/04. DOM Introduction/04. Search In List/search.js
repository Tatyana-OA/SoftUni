function search() {
  let searchText = document.querySelector('#searchText').value;
  let listItems = document.getElementsByTagName('li')
  let match = 0;
  

  for (element of listItems) {
     if (element.textContent.toLowerCase().includes(searchText.toLowerCase())) {
      element.style.fontWeight = 'bold';
      element.style.textDecoration = 'underline';
      match++
     }
  }
  let result = document.getElementById('result')
  result.textContent = `${match} matches found`
console.log(result)

}
