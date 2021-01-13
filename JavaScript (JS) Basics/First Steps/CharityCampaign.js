function fundraiser (duration, bakers, cakeCount, waffleCount, pancakeCount) {
   cakePrice = Number(45);
   wafflePrice=Number(5.80);
   pancakePrice =Number(3.20);

   let calcprices= (Number(cakeCount)*Number(cakePrice)+ Number(waffleCount)*Number(wafflePrice) + Number(pancakeCount)*Number(pancakePrice))
   let calctotal = Number(calcprices)*Number(bakers)*Number(duration)
   let expenses = Number(1/8*calctotal);
   let totalfunds = calctotal - expenses;
   
   console.log(totalfunds)
}

fundraiser("131",
"5",
"9",
"33",
"46")

