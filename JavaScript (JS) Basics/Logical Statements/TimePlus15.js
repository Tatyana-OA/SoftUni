function solve (hour, minutes) {
    hour=Number(hour);
    minutes=Number(minutes);

    let hoursToMinutes = hour*60;
    let minutesAdded = minutes+15;
    let totalMinutes = hoursToMinutes+minutesAdded;
    let firstPart=Math.floor(totalMinutes/60);
    let secondPart = totalMinutes%60;
    
    if (firstPart<24 && secondPart<10) {
        console.log(`${firstPart}:0${secondPart}`)
    } else if (firstPart<24 && secondPart>=10) {
        console.log(`${firstPart}:${secondPart}`)
    } else if (firstPart=24 && secondPart<10) {
        console.log(`0:0${secondPart}`)
    } else if (firstPart=24 && secondPart>=10) {
        console.log(`0:${secondPart}`)
    }

}
solve("12", "55")
