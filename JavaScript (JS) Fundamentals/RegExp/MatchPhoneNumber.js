function matchNum(input){
let myRegExp= /[\+][3][5][9]([- ])[2]\1[\d]{3}\1[\d]{4}\b/g
let resultArr = [];
let match = myRegExp.exec(input) 
while (match!=null){
    resultArr.push(match[0])
    match = myRegExp.exec(input) 
}
console.log(resultArr.join(", "))

}
