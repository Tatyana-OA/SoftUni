function store(input){
    let sumOfPartsNoTax = 0;
    let workArr=input.slice(0)
    let taxSum = 0;
    let clientType = workArr.pop()
    workArr=workArr.map(Number);
    // console.log(clientType)
    for (pcPart of workArr) {  
        if (pcPart>=0){
        sumOfPartsNoTax+=pcPart  
        taxSum+= pcPart*0.2
        }
        else {
            console.log("Invalid price!")
        }
    
    }
    let totalPrice = sumOfPartsNoTax+taxSum;
    if (clientType==="special") {
        totalPrice*=0.9
        if (totalPrice>0) {
        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${sumOfPartsNoTax.toFixed(2)}$`)
        console.log(`Taxes: ${taxSum.toFixed(2)}$`)
        console.log("-----------")
        console.log(`Total price: ${totalPrice.toFixed(2)}$`)
        }
        else {
            console.log("Invalid order!")
        }
    } else if (clientType==="regular") {
        if (totalPrice>0) {
        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${sumOfPartsNoTax.toFixed(2)}$`)
        console.log(`Taxes: ${taxSum.toFixed(2)}$`)
        console.log("-----------")
        console.log(`Total price: ${totalPrice.toFixed(2)}$`)
        }
        else {
            console.log("Invalid order!")
        }   
    }

}
store([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ]    
    )
    store([
        '1023', 
        '15', 
        '-20',
        '-5.50',
        '450', 
        '20', 
        '17.66', 
        '19.30', 'regular'
        ]
        )
        store([
            'regular'
            ]
            )
