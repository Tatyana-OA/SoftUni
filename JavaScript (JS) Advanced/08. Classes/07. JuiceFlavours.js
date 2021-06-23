function jus(input) {
    let productionofJus = {}
    let bottlesObj = {}

    input.forEach(element => {
       let [type,qty]= element.split(" => ")
       qty = Number(qty)
        if (!productionofJus.hasOwnProperty(type)) {
            productionofJus[type] = qty
        } else {
            let current = productionofJus[type];
            productionofJus[type] = current + qty
        }
        if (productionofJus[type]>=1000) {
            let bottles = Math.trunc(productionofJus[type]/1000)
            bottlesObj[type] = bottles 

        }
    });
for (let key in bottlesObj) {
    console.log(`${key} => ${bottlesObj[key]}`)
}
}

jus(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)
jus(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)
