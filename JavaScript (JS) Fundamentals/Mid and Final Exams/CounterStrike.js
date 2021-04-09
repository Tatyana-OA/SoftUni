function strike(input){
    let initialEnergy = Number(input.shift())
    let battleCount = 0;

    for (let i =0; i<input.length; i++) {
        let distanceNeeded = (input[i])
        if (distanceNeeded===`End of battle`) {
            console.log(`Won battles: ${battleCount}. Energy left: ${initialEnergy}`)
            break;
        }
        initialEnergy-=Number(distanceNeeded)
        if (initialEnergy>=0) {
            battleCount++;
        }
      
        if (battleCount%3==0) {
            initialEnergy+=battleCount
        }
        if (initialEnergy<distanceNeeded || initialEnergy==0) {
            if (initialEnergy<0) {
                initialEnergy=0;
            }
            console.log(`Not enough energy! Game ends with ${battleCount} won battles and ${initialEnergy} energy`)
            break;
        } 
       // console.log(distanceNeeded)

    }

}
strike([10000,
    10000,
    10,
    10,
    1,
    2,
    3,
    73,
    10]
    )
// strike([200,
//     54,
//     14,
//     28,
//     13,
//     'End of battle']
//     )
