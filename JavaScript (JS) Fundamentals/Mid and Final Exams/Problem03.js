function solve(input){
    let pirateShip = input.shift().split(">").map(x => Number(x))
    let warship = input.shift().split(">").map(x => Number(x))
    let maxHealthOfSection = Number(input.shift())
    let count = 0; // for status calculation
    let trigger = false; // that we need to break because of a winner

    for (let i=0; i<input.length; i++) {
        let command = input[i];
        if (command=='Retire') {
            break;
        } else {
           command= command.split(" ")
            if (command.includes('Fire')) {
                command.shift();
                let index = Number(command[0]);
                let damage = Number(command[1])
                if (index<warship.length && index>=0) {
                    //valid index
                    warship[index]-=damage;
                     if (warship[index]<=0) {
                    //sinks
                    trigger=true;
                    console.log(`You won! The enemy ship has sunken.`)
                    break;
                     } else if (warship[index]>0) {
                    // if damaged but not sunk, just go with that
                    warship[index]=warship[index]
                     }
                }else {
                    // if not valid, no change
                    warship=warship;
                }
            }else if (command.includes('Defend')) {
                command.shift();
                let Startindex = Number(command[0]);
                let EndIndex = Number(command[1])
                let damage = Number(command[2])
                if (Startindex>=0 && Startindex<pirateShip.length
                    && EndIndex>=0 && EndIndex<pirateShip.length) {
                        for(let j=Startindex; j<=EndIndex; j++){
                            if (damage>pirateShip[j]) {
                                trigger=true;
                                console.log(`You lost! The pirate ship has sunken.`)
                            break;
                            } else {
                                pirateShip[j]-=damage
                            }
                    }
                }
                else {
                    pirateShip=pirateShip
                }
            }else if (command.includes('Repair')){
                command.shift();
                let index = Number(command[0])
                let health = Number(command[1])
                if (index>=0 && index<pirateShip.length){
                    let repairedHealth = pirateShip[index]+health;
                    if (repairedHealth>=maxHealthOfSection) {
                        pirateShip[index]=maxHealthOfSection
                    } else {
                        pirateShip[index]=repairedHealth
                    }
                }
            }else if (command.includes('Status')) {
                for (el of pirateShip) {
                    if (el< 0.2*maxHealthOfSection) {
                        count++
                        
                    }
                }
                console.log(`${count} sections need repair.`)

            }
        }
        if (trigger){
            break;
        }
    }
    if (trigger!=true) {
        let pirateShipStatus =0;
        for (num of pirateShip){
            pirateShipStatus+=num;
        }
        let WarshipStatus =0;
        for (mun of warship) {
            WarshipStatus+=mun;
        }
        console.log(`Pirate ship status: ${pirateShipStatus}`)
        console.log(`Warship status: ${WarshipStatus}`)
    }

    
}
// solve((["2>3>4>5>6",
// "2>3>4>5>6>10>11",
// "15",
// "Fire -1 22",
// "Fire 22 44",
// "Fire 1 1",
// "Retire"])
// )


solve(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
