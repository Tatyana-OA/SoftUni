function autoEngineering(input) {
    let carsObj= {}
    input.forEach(element => {
        let [brand,model,producedCars] = element.split(" | ")
        producedCars=Number(producedCars)
        if (!carsObj[brand]) {
            carsObj[brand] = {}
        } 
        if (!carsObj[brand][model]) {
            carsObj[brand][model] = 0
        }     
        carsObj[brand][model]+=producedCars
       
    });

for (let key in carsObj) {
    console.log(key)
    for (let [car,qty] of Object.entries(carsObj[key])) {
        console.log(`###${car} -> ${qty}`)
    }
}

}

console.log(autoEngineering(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
))
