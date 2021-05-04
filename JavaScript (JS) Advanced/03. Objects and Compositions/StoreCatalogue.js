function storage(input){
    let storageCatalogue = {}
    input = input.sort((a,b) => a.localeCompare(b))
    for (line of input) {
        let [product, price] = line.split(` : `)
        price = Number(price)
        let firstLetter = product[0];
        if (!storageCatalogue.hasOwnProperty(firstLetter)) {
            storageCatalogue[firstLetter]=[]
        }
        storageCatalogue[firstLetter].push([product,price])
    }
    
    for (let key in storageCatalogue) {
        console.log(key)
        for (item of storageCatalogue[key]) {
            console.log(`  ${item[0]}: ${[item[1]]}`) 
        }
    
    }

}
console.log(storage(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']

))
