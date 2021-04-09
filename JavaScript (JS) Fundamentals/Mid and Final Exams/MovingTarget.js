function moving(input){
    let targets=input.shift().split(" ")

    for (let i=0; i<input.length; i++){
        let command = input[i];
        if (command==='End') {
            break;
        } else {
            command = command.split(" ")
            let indexToManipulate = Number(command[1]);
            if (command.includes("Shoot")) {
                let power = Number(command[2]);
                if (indexToManipulate<targets.length) {
                    targets[indexToManipulate]-=power;
                    if (targets[indexToManipulate]<=power) {
                        targets.splice(indexToManipulate,1)
                    }
                }

            }else if (command.includes("Add")) {
                let value = Number(command[2]);
                if (indexToManipulate<targets.length){
                    targets.splice(indexToManipulate,0,value)
                } else {
                    console.log(`Invalid placement!`)
                }
            }
            else if (command.includes("Strike")){
                let radius = Number(command[2]);
                if (indexToManipulate<targets.length &&
                    indexToManipulate-radius<=targets.length &&
                    indexToManipulate+radius<=targets.length) {
                        if (radius!=0){
                        targets.splice(indexToManipulate-radius,(radius*2)+1)
                        }
                    } 
                    else {
                        console.log(`Strike missed!`)
                    }
            }
        }
    }

console.log(targets.join("|"))

}

moving([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 0",
  "Add 22 3",
  "End",
]);
// moving([
//     '47 55 85 78 99 20',
// 'Shoot 1 55',
// 'Shoot 8 15',
// 'Strike 2 3',
// 'Add 0 22',
// 'Add 2 40',
// 'Add 2 50',
// 'End'

// ])
