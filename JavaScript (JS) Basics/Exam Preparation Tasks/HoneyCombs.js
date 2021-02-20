function solve (bees,flowers){
    bees= Number(bees);
    flowers= Number(flowers);

    let honeyByOneBee = 0.21*flowers;
    let resultCombs = Math.floor((honeyByOneBee*bees)/100)
    let honeyLeft = (((honeyByOneBee*bees/100) - resultCombs)*100).toFixed(2)
    console.log (`${resultCombs} honeycombs filled.`)
    console.log (`${honeyLeft} grams of honey left.`)


}

solve ("25","6400")
