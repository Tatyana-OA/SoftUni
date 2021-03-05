function solve (first, second, third, fourth, fifth) {
    let lostFights = Number(first);
    let helmetPrice = Number(second);
    let swordPrice = Number(third);
    let shieldPrice = Number(fourth);
    let armorPrice = Number(fifth);
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;
    let expenses = 0;

    for (let i=1; i<=lostFights; i++) {
        if (i%2==0) {
            helmetCount++
        }if (i%3==0) {
            swordCount++
        } if (i%2==0 && i%3==0) {
            shieldCount++
                if (shieldCount%2===0) {
                    armorCount++
                }
        }  
    }
   
    helmetPrice*=helmetCount;
    swordPrice*=swordCount;
    shieldPrice*=shieldCount;
    armorPrice*=armorCount;

    expenses = helmetPrice+swordPrice+shieldPrice+armorPrice;
    console.log (`Gladiator expenses: ${expenses.toFixed(2)} aureus`)

} 

    solve (23,
        12.50,
        21.50,
        40,
        200
        
        )
