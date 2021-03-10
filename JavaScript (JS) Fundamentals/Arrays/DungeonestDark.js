function solve (input){
    let initialHealth = 100;
    let healed = 0;
    let initialCoins = 0;
    newArr= input.toString().split('|')

    for (let i=0; i<newArr.length; i++) {
        let current= newArr[i]
        currentSplit = current.toString().split(' ')
        let wordPart = currentSplit[0];
        let numPart = currentSplit[1];
        let finalHeal = 0;

        if (wordPart==="potion") {
            healed = Number(numPart)+Number(initialHealth);
            if (initialHealth>100){
                finalHeal=100-initialHealth;
                console.log (`You healed for ${finalHeal} hp.`)
            } else if (healed<=100){
                console.log (`You healed for ${numPart} hp.`)
                console.log (`Current health: ${healed} hp.`)
            } else if (healed>100){
                finalHeal=100-initialHealth;
                console.log(`You healed for ${finalHeal} hp.`)
                initialHealth=100;
                console.log (`Current health: ${initialHealth} hp.`)
            }
        } else if (wordPart==="chest") {
            console.log (`You found ${numPart} coins.`)
            initialCoins+=Number(numPart);
        } else {
            let monsterAttack = numPart;
            initialHealth-=monsterAttack;
            if (initialHealth>0) {
                console.log (`You slayed ${wordPart}.`)
            } else {
                console.log (`You died! Killed by ${wordPart}.`)
                if (i!=newArr.length-1) {
                    console.log (`Best room: ${i+1}`)
                    break;
                }
            }
        }
    }
    if (i=newArr.length-1 && initialHealth>0) {
        console.log ("You've made it!")
        console.log(`Coins: ${initialCoins}`)
        console.log(`Health: ${initialHealth}`)
    }

}
solve ("rat 150|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
//solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
