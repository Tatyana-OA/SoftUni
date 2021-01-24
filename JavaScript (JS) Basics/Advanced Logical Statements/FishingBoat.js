function solve (budget, season, fishermen) {
    budget=Number(budget);
    fishermen=Number(fishermen);
    let boatPrice=0;
    let peopleDiscount = 0;
    let totalPrice=0;
    let evenDiscount=0;
    switch (season) {
    case "Spring":
    boatPrice=3000;
    break;
    case "Summer":
    boatPrice=4200;
    break;
    case "Autumn":
    boatPrice=4200;
    break;
    case "Winter":
    boatPrice=2600;
    break;
    }
    if (fishermen<=6) {
    peopleDiscount=0.1*boatPrice;
    } else if (fishermen>=7 && fishermen<=11) {
    peopleDiscount=0.15*boatPrice;
    } else if (fishermen>=12) {
    peopleDiscount=0.25*boatPrice;
    }
    totalPrice= (boatPrice-peopleDiscount).toFixed(2)  // без отстъпка за четни
    if (fishermen%2==0 && season!="Autumn") {
    evenDiscount=(0.05*totalPrice).toFixed(2);
    totalPrice= totalPrice-evenDiscount
    }
    if (budget>=totalPrice) {
        let moneyLeft=(budget-totalPrice).toFixed(2);
        console.log (`Yes! You have ${moneyLeft} leva left.`)
    } else {
        let moneyNeeded=(totalPrice-budget).toFixed(2); 
        console.log(`Not enough money! You need ${moneyNeeded} leva.`)
    }

}
solve ("2000",
"Winter",
"13")
