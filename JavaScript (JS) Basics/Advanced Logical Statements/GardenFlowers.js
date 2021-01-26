function solve (type, amount, budget) {
    amount=Number(amount);
    budget = Number(budget);
    let price = 0;
    let discount=0;
    switch (type) {
    case "Roses":
    price=5.00;
    if (amount>80) {
        discount=(price*amount)*0.1
        price = (price*amount)-discount;
    } else if (amount<=80) {
        discount=0;
        price=price*amount;
    }
    break;
    case "Dahlias":
    price=3.80;
    if (amount>90) {
        discount=(price*amount)*0.15;
        price = (price*amount)-discount;
    } else if (amount<=90) {
        discount=0;
        price=price*amount;
    }
    break;
    case "Tulips":
    price=2.80;
    if (amount>80) {
        discount=(price*amount)*0.15;
        price = (price*amount)-discount;
    }else if (amount<=80) {
        discount=0;
        price=price*amount;
    }
    break;
    case "Narcissus":
    price=3.00;
    if (amount<120) {
    discount=(price*amount)*0.15;
    price = (price*amount)+discount;
    } else  {
        discount=0;
        price=price*amount;
    }
    break;
    case "Gladiolus":
    price=2.50;
    if (amount<80) {
        discount=(price*amount)*0.20;
        price = (price*amount)+discount;
        } else  {
            discount=0;
            price=price*amount;
        }
    break;
    }
    if (budget>=price) {
    let moneyLeft = (budget-price).toFixed(2);
    console.log (`Hey, you have a great garden with ${amount} ${type} and ${moneyLeft} leva left.`)
    } else if (price>budget) {
    let moneyNeeded = (price-budget).toFixed(2);
    console.log (`Not enough money, you need ${moneyNeeded} leva more.`)
    } 

}
solve ("Roses",
"0",
"0")








