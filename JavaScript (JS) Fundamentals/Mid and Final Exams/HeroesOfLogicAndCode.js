function heroes(input){
    let totalHeroes = Number(input.shift());
    let heroesObj = {};
    for (let i =0; i<totalHeroes; i++) {
       let [heroName, hp, mana] = input[i].split(" ")
       hp=Number(hp);
       mana=Number(mana);
    if (!heroesObj.hasOwnProperty(heroName)){
        heroesObj[heroName] = {
            hp,
            mana
        }
    }
}
// start actual code
input.splice(0,totalHeroes)

for (line of input) {
    if (line===`End`) {
        break;
    }
    let [command,heroName,...params]=line.split(" - ")
    if (command===`CastSpell`) {
        let manaCost = Number(params[0]);
        let spellName = params[1];
        if (heroesObj[heroName].mana>=manaCost) {
            heroesObj[heroName].mana -=manaCost;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesObj[heroName].mana} MP!`)
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
        }
    }else if (command===`TakeDamage`){
        let damage = Number(params[0]);
        let attacker = params[1];
        heroesObj[heroName].hp-=damage;
        if (heroesObj[heroName].hp>0) {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[heroName].hp} HP left!`)
        }else if (heroesObj[heroName].hp<=0){
            delete heroesObj[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`)
        }
    }else if (command===`Recharge`){
        let manaRecharged = Number(params[0]);
        let currentMana = heroesObj[heroName].mana;
        let totalNewMana = currentMana+manaRecharged;
        if (totalNewMana>=200) {
            let actualRecharge = 200-heroesObj[heroName].mana;
            console.log(`${heroName} recharged for ${actualRecharge} MP!`)
            heroesObj[heroName].mana = 200;
        } else {
            console.log(`${heroName} recharged for ${manaRecharged} MP!`)
            heroesObj[heroName].mana=totalNewMana;
        }

    }else if (command===`Heal`){
        let healAmount = Number(params[0]);
        let currentHealth = heroesObj[heroName].hp;
        let totalNewHP = currentHealth+healAmount;
        if (totalNewHP>=100) {
            let actualRecharge = 100-heroesObj[heroName].hp;
            console.log(`${heroName} healed for ${actualRecharge} HP!`)
            heroesObj[heroName].hp = 100;
        } else {
            console.log(`${heroName} healed for ${healAmount} HP!`)
            heroesObj[heroName].hp = totalNewHP
        }
    }
}
///console.log(heroesObj)
//SORTING IT ALL OUT -> hp desc; name asc

let toArr = Object.entries(heroesObj)
let sorted = toArr.sort((a,b) => {
    let heroAname = a[0];
    let heroBname = b[0];
    let statsA= Object.values(a[1]);
    let statsB = Object.values(b[1])
    let hpA = statsA[0];
    let hpB = statsB[0];

    return hpB-hpA || heroAname-heroBname;
})
//console.log(sorted)
for (line of sorted) {
    let heroName = line[0];
    console.log(heroName)
    let statsToArr = Object.entries(line[1]);
    console.log(`  HP: ${statsToArr[0][1]}`)
    console.log(`  MP: ${statsToArr[1][1]}`)
}
}
// heroes([
//     2,
//     `Solmyr 85 120`,
//     `Kyrre 99 50`,
//     `Heal - Solmyr - 10`,
//     `Recharge - Solmyr - 50`,
//     `TakeDamage - Kyrre - 66 - Orc`,
//     `CastSpell - Kyrre - 15 - ViewEarth`,
//     `End`,
//   ])

  heroes([4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
    ])
