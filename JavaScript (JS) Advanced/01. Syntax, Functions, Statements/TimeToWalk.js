function walk(steps,footprintM,speedKmH) {
    steps=Number(steps);
    footprintM=Number(footprintM);
    speedKmH=Number(speedKmH);
    let hoursPart = 0;
    let hoursPartMin = 0;
    let distanceMeters = steps*footprintM;
    //console.log(distanceMeters)
    let speedMS = (speedKmH*5)/18;
    //console.log(speedMS)
    // S = V*T => T = S/V
    let breaksCount = Math.floor(distanceMeters/500)
    let breakSeconds = breaksCount*60;
    //console.log(breaks)
    let timeSeconds = (distanceMeters/speedMS) + breakSeconds;
    // console.log(timeSeconds)
    let minutesPart = Math.floor(timeSeconds/60)
    let secondsPart = Math.round(timeSeconds%60)
   // minutes till 59 & over
   let hourResult = '';
   let minutesResult = '';
   let secondResult = '';
   if (secondsPart>=10) {
    secondResult+=secondsPart;
   }else if (secondsPart<10) {
    secondResult+=`0${secondsPart}`
   }
  if (minutesPart>=60) {
    hoursPart = Math.floor(minutesPart/60)
    hoursPartMin = minutesPart%60;
    if (hoursPart<=9) {
        hourResult = `0${hoursPart}`
    }else if (hoursPart>9) {
        hourResult +=hoursPart
    } if (hoursPartMin>=10) {
        minutesResult+=hoursPartMin
    } else {
        minutesResult+=`0${hoursPartMin}`
    }
 
   }
   else if (minutesPart<=59) {
    if (minutesPart>=10) {
        minutesResult+=minutesPart
    } else {
        minutesResult+=`0${minutesPart}`
    }
   }

   if (hourResult=='') {
       hourResult+='00'
   }
   if (minutesResult.length>0) {
    console.log(`${hourResult}:${minutesResult}:${secondResult}`)
   } else {
    console.log(`${hourResult}:${hoursPartMin}:${secondResult}`) 
   }
  


}
walk(4000, 0.60, 5)
walk(2564, 0.70, 5.5)
