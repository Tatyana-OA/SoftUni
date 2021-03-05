function solve(start) {
    let dailyYield = Number(start);
    let workersConsumption = 26;
    let daysCount = 0;
    let overallYield=0;

    while (dailyYield>=100) {
        overallYield += dailyYield-workersConsumption;
        dailyYield-=10;
        daysCount++

        if (dailyYield<100 && dailyYield>=26) {
            overallYield-=26
            break;
           
        }
    }
    console.log (daysCount)
    console.log (overallYield)

} solve (111)
