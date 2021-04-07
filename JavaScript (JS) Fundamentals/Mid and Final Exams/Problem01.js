function solve(one, two, three, four, five){
    let budget = Number(one)
    let students = Number(two)
    let flourPrice = Number(three)
    let eggPrice = Number(four)
    let apronPrice = Number(five)
    let moneyNeeded = 0;
    let freePackageCount = Math.floor(students/5);
    let totalEggs = students*10*eggPrice;
    let totalFlour = flourPrice*(students-freePackageCount)
    let totalAprons = Math.ceil(students*1.2)*apronPrice

    moneyNeeded= totalAprons+totalEggs+totalFlour
    
    if (budget>=moneyNeeded){
        console.log(`Items purchased for ${moneyNeeded.toFixed(2)}$.`)
    } else {
        let more=moneyNeeded-budget;
        console.log(`${more.toFixed(2)}$ more needed.`)
    }
    
}
