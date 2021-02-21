function solve(startingPopulation, yearses) {
    let allBees=Number(startingPopulation);
    let years= Number(yearses);
    let hatchedBees = 0;
    let diedOut=0;
    let migration=0;

    for (let i=1; i<=years; i++) {
        hatchedBees=parseInt(allBees/10)*2 
        allBees+=hatchedBees;

        if (i%5===0) {
          //  hatchedBees=parseInt(allBees/10)*2 
           // allBees+=hatchedBees;
           migration= parseInt(allBees/50)*5;
           allBees-=migration;
        }
        diedOut=parseInt(allBees/20)*2;
        allBees-=diedOut;
    
    }

    console.log (`Beehive population: ${allBees}`)
}
solve ("1000", "23")
