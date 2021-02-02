function solve (leapYear, normalYear) {
leapYear=Number(leapYear);
normalYear=Number(normalYear);

for (let i=leapYear; i <=normalYear; i++){ 
    if (i%4==0) {
        console.log (i);
    }
}

}
solve ("1584",
"1597")
