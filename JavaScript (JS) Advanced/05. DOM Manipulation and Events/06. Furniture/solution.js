function solve() {
let textAreaInput = document.querySelectorAll('textarea')[0]
let buttonGenerate = document.querySelectorAll('button')[0]
let textAreaResult = document.querySelectorAll('textarea')[1]
let buttonBuy = document.querySelectorAll('button')[1]

buttonGenerate.addEventListener('click', onClick)

function onClick(ev) {
  let inputArr = JSON.parse(textAreaInput.value)
  // every single object containing info about a single item
  for (let item of inputArr) {
    let [name,image,price,factor] = Object.values(item)
    console.log(image)
    let tableRow = document.createElement('tr')
    let tbody = document.querySelector('tbody')
    tbody.appendChild(tableRow)
    // create 5 td for each spec
    let tdImg = document.createElement('td')
    let imageItem = document.createElement('img')
    imageItem.src = image
    tdImg.appendChild(imageItem)
    tableRow.appendChild(tdImg)
    let tdName = document.createElement('td')
    tdName.textContent = name
    tableRow.appendChild(tdName)
    let tdPrice = document.createElement('td')
    tdPrice.textContent = price
    tableRow.appendChild(tdPrice)
    let tdFactor = document.createElement('td')
    tdFactor.textContent =factor
    tableRow.appendChild(tdFactor)
    let tdInput = document.createElement('td')
    let box = document.createElement('input')
    box.type = "checkbox"
    tdInput.appendChild(box)
    tableRow.appendChild(tdInput)
  }

  buttonBuy.addEventListener('click', onBuy) 

  let boughtFurniture = []
  let totalPrice = 0;
  let avgFactor = []
  function onBuy (ev) {
    let markedCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'))
    .filter(x => x.checked)
    for (let box of markedCheckboxes) {
      let parentTr = box.parentNode.parentNode
      let boughtName = parentTr.children[1].textContent
      let boughtPrice = Number(parentTr.children[2].textContent)
      let boughtFactor = Number(parentTr.children[3].textContent)
      boughtFurniture.push(boughtName)
      totalPrice+=boughtPrice
      avgFactor.push(boughtFactor)
    }
    let totalPriceString = `Total price: ${totalPrice.toFixed(2)}`
    avgFactor = avgFactor.reduce((acc,c) => acc + c /avgFactor.length, 0)
    let avgFactorString = `Average decoration factor: ${avgFactor}`
    textAreaResult.value = `Bought furniture: ${boughtFurniture.join(", ")}\n${totalPriceString}\n${avgFactorString}`
   
    
  }
  
}
}
