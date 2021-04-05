function dates(input){
let myRegExp = /(?<day>[\d]{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>[\d]{4})/g;
let match = myRegExp.exec(input)
let resultArr=[];
while(match!=null){
    resultArr.push(match[0])
    console.log(`Day: ${match[1]}, Month: ${match[3]}, Year: ${match[4]}`)
    match = myRegExp.exec(input)
}
//console.log(resultArr)
}
