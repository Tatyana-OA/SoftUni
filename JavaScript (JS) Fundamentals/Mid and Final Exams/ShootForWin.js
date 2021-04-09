function shoot(input){
    let shotCount = 0;
    let targets = input.shift().split(" ").map(x => Number(x))
        for (i=0; i<targets.length; i++) {
            let command = input[i]
            if (command==='End') {
                break;
            }
           if (typeof targets[command] !== 'undefined')  {
            let possible = targets[command]
            targets.splice(command,1,-1)
            for (let j = 0; j<targets.length; j++) {
                if (targets[j]>possible && targets[j]!=-1){
                    targets[j]-=possible
                } else if (targets[j]<=possible && j!=command &&targets[j]!=-1) {
                    targets[j]+=possible
                }
            }

            shotCount++
           }    
        }
        console.log(`Shot targets: ${shotCount} -> ${targets.join(" ")}`)
     
}
// shoot(['24 50 36 70', 0,
// 4,
// 3,
// 1,
// 'End'
// ])
shoot(['30 30 12 60 54 66',
    5,
    2,
    4,
    0,
    'End',
    ])
