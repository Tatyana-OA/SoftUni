function solve (year) {
    let LeapYear = Number(year);

    if  ((LeapYear%4==0 && LeapYear%100!=0) || LeapYear%400==0){
        console.log ("yes")
    }else (
        console.log ("no")
    )
} solve (4)
