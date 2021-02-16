function solve(input) {
let index = 0;
let commandLine = input[index];
let savedMoney=0;
let allMoney=0;


while (commandLine!=="End") {
    let destination = input[index++];
    let tripCost = Number(input[index++])
    savedMoney = Number(input[index++])
    while (savedMoney<=tripCost) {
       
        allMoney+=savedMoney;

        if (allMoney>=tripCost) {
            console.log (`Going to ${destination}!`)
            allMoney=0;
            break;
        }  
         savedMoney = Number(input[index++])

        
    }
    if (commandLine==="End") {
        break;
    }
}
}

solve ((["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])

)
