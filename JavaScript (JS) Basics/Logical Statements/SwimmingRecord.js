function solve (record, distance, time) {
    record=Number(record) // in seconds
    distance=Number(distance) // in meters
    time=Number(time) // seconds to swim 1 meter

    let timeNeeded = distance*time; // time in seconds he needs to swim the distance
    let addedSeconds = Math.floor(distance/15)*12.5;
    timeNeeded=(timeNeeded+addedSeconds);

    if(timeNeeded>=record) {
        let notEnough=(timeNeeded-record).toFixed(2);
        console.log (`No, he failed! He was ${notEnough} seconds slower.`)
    } else if (timeNeeded<record) {
        console.log (`Yes, he succeeded! The new world record is ${timeNeeded.toFixed(2)} seconds.`)
    }

}
solve("55555.67",
"3017",
"5.03")
