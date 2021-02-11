function solve(input) {
  let days = Number(input[0]);
  let index = 1; 
  let commandLine = input[index++]; 
  let winCount = 0; 
  let loseCount = 0; 
  let moneyDaily=0;
  let moneyRaised = 0;
  let allWon = 0;
  let allLost=0;

  for (let i=1; i<=days; i ++) {
    while (commandLine !== "Finish") { 
      
      if (commandLine === "win") {
        winCount++;
        allWon++
      } else if (commandLine === "lose") {
        loseCount++;
        allLost++
      }
      moneyDaily =+ winCount * 20;

      commandLine = input[index++];

    }
    if (winCount > loseCount) {
        moneyDaily += 0.1 * moneyDaily;
     
      }
      moneyRaised+=moneyDaily
    commandLine=input[index++]
    loseCount=0;
    winCount=0;

  }


  if (allWon>allLost) 
  {
      moneyRaised+= 0.2*moneyRaised
      console.log (`You won the tournament! Total raised money: ${moneyRaised.toFixed(2)}`)
  } else if (allWon<allLost) {
     
      console.log (`You lost the tournament! Total raised money: ${moneyRaised.toFixed(2)}`)
  }
}
