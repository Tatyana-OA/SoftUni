function depositCalc(deposit,depositMonths,depositInterest) {
    let depositNum= Number(deposit);
    let depositMonthsNum = Number(depositMonths)
    let calcInterest= Number(depositInterest/100);
  
 let calculation = (depositNum + depositMonthsNum * ((depositNum*calcInterest)/12));
   
    console.log(calculation)
}

depositCalc("2350",
"6",
"7")

