function solve (input) {
let carryingCapacity = Number(input[0])
index=1;
let commandLine = Number(input[index++])
let suitcaseCount = 0;
let capacityLeft=0;

while (commandLine!=="End") {
    let currentCommand = Number(commandLine)
    suitcaseCount++
    if (suitcaseCount===3) {
        carryingCapacity-=(currentCommand*1.1)
    }
   else {carryingCapacity-=currentCommand
   }
   
    commandLine=input[index++]

    if (commandLine==="End" && carryingCapacity>=0){
        console.log (`Congratulations! All suitcases are loaded!`)
        console.log (`Statistic: ${suitcaseCount} suitcases loaded.`)
    } else if (commandLine==="End" || carryingCapacity<0) {
        suitcaseCount--
        console.log(`No more space!`)
        console.log (`Statistic: ${suitcaseCount} suitcases loaded.`)
        break;
    }
}


}
solve([ '700.5', '180', '340.6', '126', '220' ])
