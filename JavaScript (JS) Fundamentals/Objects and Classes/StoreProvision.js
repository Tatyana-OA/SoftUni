function storeProvision(currentStock, orderedStock) {
  let inventoryObj = {};
  let productNamesArray = [];
  let productQtyArray = [];
  for (let i = 0; i < currentStock.length; i++) {
    let currentCommand = currentStock[i];

    if (i % 2 === 0) {
      productNamesArray.push(currentCommand);
      productQtyArray.push(currentStock[i + 1]);
    }
  }

  for (let j = 0; j < orderedStock.length; j++) {
    let secondCommand = orderedStock[j];
    if (j % 2 === 0) {
      if (productNamesArray.includes(secondCommand)) {
        let toFind = productNamesArray.indexOf(secondCommand);
        let newQty =
          Number(productQtyArray[toFind]) + Number(orderedStock[j + 1]);
        productQtyArray.splice(toFind, 1, newQty);
      } else {
        productNamesArray.push(secondCommand);
        productQtyArray.push(orderedStock[j + 1]);
      }
    }
  }
  for (let l = 0; l < productNamesArray.length; l++) {
    let element = productNamesArray[l];
    console.log(`${element} -> ${productQtyArray[l]}`);
  }
}
