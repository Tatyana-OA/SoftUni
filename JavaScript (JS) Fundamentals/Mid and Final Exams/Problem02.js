function solve(input){ 
    let initialTreasure = input.shift().split("|");
    let avgGain= 0;
    
    for (let i=0; i<input.length; i++){
        let command = input[i];
        if(command==='Yohoho!') {
            break;
        }else {
            if (command.includes('Loot')) {
                let loot = command.split(" ")
                loot.shift() //get rid of the command
                for (el of loot){
                    if (initialTreasure.includes(el)){
                        initialTreasure=initialTreasure
                    }else {
                        initialTreasure.unshift(el)
                    }
                }
            }else if (command.includes('Drop')){
                let drop = command.split(" ")
                drop.shift() //get rid of the command
                let index = drop
                if (index<initialTreasure.length && index>=0) {
                    let toInsert = initialTreasure[index];
                    initialTreasure.splice(index,1)
                    initialTreasure.push(toInsert)
                }else {
                    initialTreasure=initialTreasure
                }
                
            }else if (command.includes('Steal')){
                let steal = command.split(" ")
                steal.shift() //get rid of the command
                let itemsToSteal = Number(steal);
                let stolen = [];
                    if (itemsToSteal<=initialTreasure.length){
                   stolen= initialTreasure.splice(-itemsToSteal,itemsToSteal)
                }else if (itemsToSteal>initialTreasure.length){
                    let finalSteal = initialTreasure.length
                    stolen= initialTreasure.splice(-finalSteal,finalSteal)
                }
                console.log(stolen.join(", "))

            }
        }
    }
    if (initialTreasure.length>=1) {
        for (el of initialTreasure){
            avgGain+=el.length
    
        }
        avgGain=(avgGain/initialTreasure.length).toFixed(2)
        console.log(`Average treasure gain: ${avgGain} pirate credits.`)
    }
     
        if (initialTreasure.length<1) {
            console.log(`Failed treasure hunt.`)
        }
   
}
// solve(["Gold|Silver|Bronze|Medallion|Cup",
// "Loot Wood Gold Coins",
// "Loot Silver Pistol",
// "Drop 3",
// "Steal 3",
// "Yohoho!"])
solve((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
)
