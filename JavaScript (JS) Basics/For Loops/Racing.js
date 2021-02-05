function solve (liters, expenditure, loops) {
    liters = Number(liters);
    expenditure = Number(expenditure);
    loops = Number(loops);

    let loopCount=0;



    for (let i=1; i<= loops; i++) {
        
        
        liters= liters - expenditure;

        if (i==1) {
            expenditure = expenditure-0.1;
        }
        if (liters<=0) {
            break;
        }
        
        loopCount++;
    }
    if (liters <=0) {
        console.log (`You are out of fuel in round ${loopCount}!`)
    }else {
        console.log (`Congrats! You won the race!`)
    }   

    

}
solve ("50", "4.3", "30")
