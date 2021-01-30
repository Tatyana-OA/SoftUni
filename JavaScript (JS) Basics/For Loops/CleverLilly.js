function solve([age, washPrice, toyPrice]) {
  age = Number(age);
  washPrice = Number(washPrice);
  toyPrice = Number(toyPrice);
  let count = 0; 
  let money = 0;
  let toys = 0;
  let allToys = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 == 0) {
      count += 1; 
      money += count * 10; 
    } else {
      toys += 1;
    }
  }
  money -= count; 
  
  allToys = toyPrice * toys; 
  money = money + allToys; 

  if (washPrice <= money) {
    let moneyLeft = (money - washPrice).toFixed(2);
    console.log(`Yes! ${moneyLeft}`);
  } else if (washPrice > money) {
    let moneyNeeded = (washPrice - money).toFixed(2);
    console.log(`No! ${moneyNeeded}`);
  }
}

solve
("21", "1570.98", "3")
;
