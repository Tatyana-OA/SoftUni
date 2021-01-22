function solve (tripPrice,jigsawCount,dollCount,bearCount,minionCount, truckCount) {
    tripPrice=Number(tripPrice)
    jigsawCount=Number(jigsawCount)
    dollCount=Number(dollCount)
    bearCount=Number(bearCount)
    minionCount=Number(minionCount)
    truckCount=Number(truckCount)
    let jigsawPrice= 2.60
    let dollPrice = 3.00
    let bearPrice= 4.10
    let minionPrice=8.20
    let truckPrice=2.00

    let purchasePrice = (jigsawCount*jigsawPrice) + (dollCount*dollPrice) + (bearCount*bearPrice) + (minionCount*minionPrice) + (truckCount*truckPrice);
    let purchaseCount = (jigsawCount+dollCount+bearCount+minionCount+truckCount);
    if (purchaseCount>=50) {
        let moneyAfterDiscount = (purchasePrice-(purchasePrice*0.25));
        let rent = 0.1*moneyAfterDiscount;
        let totalLeft = ((moneyAfterDiscount-rent) - tripPrice).toFixed(2);
        if (totalLeft>=tripPrice) {
            console.log (`Yes! ${totalLeft} lv left.`)
        } else {
            let moreNeeded = (tripPrice-totalLeft).toFixed(2);
            console.log (`Not enough money! ${moreNeeded} lv needed.`)
        }

    } else {
        let moneyNoDiscount = purchasePrice;
        let rentNoDiscount = 0.1*moneyNoDiscount
        let totalMoneyNoDiscount = (moneyNoDiscount-rentNoDiscount);
        if (totalMoneyNoDiscount>=tripPrice) {
            let finalShit = (totalMoneyNoDiscount-tripPrice).toFixed(2)
            console.log(`Yes! ${finalShit} lv left.`)
        } else {
            let moreNeededNoDiscount = (tripPrice-totalMoneyNoDiscount).toFixed(2)
            console.log(`Not enough money! ${moreNeededNoDiscount} lv needed.`)
        }
    }
}
solve("40.8", "20", "25", "30", "50", "10")
