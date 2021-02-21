function solve(input){

    let honeyForWinter = Number(input[0]);
    let beeName = input[1];
    let index=2;
    let commandLine = Number(input[index++])
    let honeyGathered=0;
    let honeyNeeded=0;
    let honeyOver=0;
   
    
    while (commandLine!=="Winter has come") {
        let honeyGatheredCurrent=0;
        for (let i=1; i<=6; i++) {
        let currentCommand = Number(commandLine)
        honeyGatheredCurrent+=currentCommand
        commandLine=input[index++]
        if (i===6 && honeyGatheredCurrent<0) {
            honeyGathered +=honeyGatheredCurrent
            honeyGatheredCurrent=0;
            console.log (`${beeName} was banished for gluttony`)
            beeName=commandLine
        } else if (i===6 && honeyGatheredCurrent>=0) {
            honeyGathered +=honeyGatheredCurrent
            honeyGatheredCurrent=0;
            beeName=commandLine
        }
    }

     if (commandLine==="Winter has come" && honeyGathered>=0) {
        honeyNeeded=honeyForWinter-honeyGathered;
 
        if (honeyGathered<honeyForWinter && honeyGathered>=0) {
            console.log (`Hard Winter! Honey needed ${honeyNeeded.toFixed(2)}.`)
            break;
        } else if (honeyGathered>honeyForWinter) {
            honeyOver = honeyGathered-honeyForWinter
            console.log (`Well done! Honey surplus ${honeyOver.toFixed(2)}.`)
            break;
        }
        
       
    } else if (commandLine==="Winter has come" && honeyGathered<0) {
        honeyNeeded=-honeyForWinter-honeyGathered
        console.log (`Hard Winter! Honey needed ${(-honeyNeeded).toFixed(2)}.`)
        break;
    }
    commandLine=input[index++]
    
    }
      
    }
solve([
    '1000',   'Maya',
    '-50',    '-10',
    '-20.70', '20.40',
    '10.30',  '40',
    'Yama',   '50',
    '10',     '20',
    '30',     '100',
    '100',    'Winter has come'
  ])
