function sum() {
    let result = 0;
let tableElements = document.getElementsByTagName('table')[0].querySelectorAll('tr');
tableElements= Array.from(tableElements) 
for (let i =1; i<tableElements.length-1; i++) {
   let singleRow = tableElements[i];
   let price = Number(singleRow.lastChild.textContent)
   console.log(price)

   result +=price
}
document.getElementById('sum').textContent = result
}
