function solve (budget, actors, outfitPrice){
    budget=Number(budget);
    actors=Number(actors);
    outfitPrice=Number(outfitPrice);
    let decor= 0.1*budget;
    let outfitCosts=actors*outfitPrice;

    if (actors>150) {
        outfitCosts=0.9*outfitCosts;
    }

    if ((decor+outfitCosts)>budget) {
        let neededMoney = ((decor+outfitCosts) - budget).toFixed(2);
        console.log("Not enough money!")
        console.log (`Wingard needs ${neededMoney} leva more.`)
    } else if ((decor+outfitCosts)<=budget) {
        let moneyLeft = (budget-(decor+outfitCosts)).toFixed(2);
        console.log ("Action!")
        console.log(`Wingard starts filming with ${moneyLeft} leva left.`)
    }
}
solve("9587.88",
"222",
"55.68")
