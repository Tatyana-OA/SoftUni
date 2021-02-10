function solve(input) {
  let vacationCost = Number(input[0]);
  let moneyAvailable = Number(input[1]);
  let index = 2; 
  let spendingCount = 0; 
  let daysCount = 0; 

  while (true) {
    let nextCommandString = input[index++]; 
    let nextCommandNumber = Number(input[index++]); 

    if (nextCommandString === "spend") {
      moneyAvailable -= nextCommandNumber;
      spendingCount++;
      if (moneyAvailable <= 0) {
        moneyAvailable = 0;
      }
    }
    if (nextCommandString === "save") {
      moneyAvailable += nextCommandNumber;
      spendingCount=0;
    }

    daysCount++;

    if (spendingCount === 5) {
      console.log(`You can't save the money.`);
      console.log(daysCount);
      break;
    }
    if (moneyAvailable >= vacationCost) {
      console.log(`You saved the money for ${daysCount} days.`);
      break;
    }
  }
}
