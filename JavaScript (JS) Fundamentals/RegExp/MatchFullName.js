function match(input){
let myRegExp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
let match = myRegExp.exec(input)
let resultArr=[]
while (match!=null){
    resultArr.push(match[0])
    match = myRegExp.exec(input)
}
console.log(resultArr.join(" "))
}
