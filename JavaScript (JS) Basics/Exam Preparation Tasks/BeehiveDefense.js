function solve(input1, input2, input3) {
    let bees=Number(input1);
    let healthScoreBear =Number(input2);
    let attackStrikeBear = Number(input3);
    let bearKillPerAttack=0;
    let combinedBeeAttack = 0

    while (bees>=0) {
        bearKillPerAttack=attackStrikeBear;
        bees-=bearKillPerAttack; 
        combinedBeeAttack=bees*5;
        healthScoreBear-=combinedBeeAttack;
        if (bees<0) {
                console.log (`The bear stole the honey! Bees left 0.`)
                break;
        }

        if (bees<100) {
            console.log (`The bear stole the honey! Bees left ${bees}.`)
            break;
        } else if (healthScoreBear===0 || healthScoreBear<0){
            console.log(`Beehive won! Bees left ${bees}.`)
            break;
        }



    }

}
solve ("200", "10000", "90")
