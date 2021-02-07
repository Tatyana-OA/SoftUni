function solve (input){
let badGrades = input[0]; 
let index=1 
let achievedBadGrades = 0; 
 
let averageScore = 0 

let lastProblem =0;
counter = 0; 
let isEnough=false;

while (true) {

    let nextCommandString = input[index++]  
    let nextCommandNumber = Number(input[index++])
    if (nextCommandString==="Enough") {
        isEnough=true;
        break;
    }
    if (nextCommandNumber<=4) {
        achievedBadGrades++

    }
   
    averageScore+=nextCommandNumber;
    counter++
    if (achievedBadGrades>=badGrades) {
        break;
    }
}
if (achievedBadGrades>=badGrades) {
    console.log (`You need a break, ${achievedBadGrades} poor grades.`)
}

lastProblem = input[input.length-3];
if (isEnough) {
    averageScore=(averageScore/counter).toFixed(2)
console.log (`Average score: ${averageScore}`)
console.log (`Number of problems: ${counter}`)
console.log (`Last problem: ${lastProblem}`)
}


}

solve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

