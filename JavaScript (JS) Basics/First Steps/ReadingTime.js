function reading (pagesInbook,pagesPerHour,daysToRead){
    let calcReading = (Number(pagesInbook)/Number(pagesPerHour))/Number(daysToRead);
    console.log(calcReading)
}
reading("432",
"15",
"4")
