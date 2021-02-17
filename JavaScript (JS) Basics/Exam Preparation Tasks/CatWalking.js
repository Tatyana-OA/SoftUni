function solve(minutesWalking, walksPerDay, caloriesPerDay) {

    minutesWalking=Number(minutesWalking);
    walksPerDay=Number(walksPerDay);
    caloriesPerDay=Number(caloriesPerDay);

    let allWalkingMinutes = minutesWalking*walksPerDay;
    let allCaloriesBurned = allWalkingMinutes*5;

    if (allCaloriesBurned>= caloriesPerDay/2) {
        console.log (`Yes, the walk for your cat is enough. Burned calories per day: ${allCaloriesBurned}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${allCaloriesBurned}.`)
    }



}
solve ("30", "3", "600")
