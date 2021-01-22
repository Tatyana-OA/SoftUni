function sumseconds (timeFirst, timeSecond, timeThird) {
    timeFirst=Number(timeFirst);
    timeSecond=Number(timeSecond);
    timeThird=Number(timeThird);

    let sumAllSeconds = timeFirst+timeSecond+timeThird;
    let secondsToMinutes = Math.floor(sumAllSeconds/60);
    let secondsLeft = sumAllSeconds%60;

    if (secondsLeft<10) {
        console.log (`${secondsToMinutes}:0${secondsLeft}`);
    }
    else {
        console.log (`${secondsToMinutes}:${secondsLeft}`);
    }
}
sumseconds("22", "7", "34")
