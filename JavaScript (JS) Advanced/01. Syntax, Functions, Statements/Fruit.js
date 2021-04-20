function fruit(fruitType,weightGrams,priceKg) {
    weightGrams=Number(weightGrams);
    priceKg=Number(priceKg);
    let moneyNeeded = weightGrams*(priceKg/1000);
    let toKg = weightGrams/1000;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${toKg.toFixed(2)} kilograms ${fruitType}.`)


}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35)
