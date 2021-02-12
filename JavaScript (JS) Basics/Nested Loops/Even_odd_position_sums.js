function solve(input){
let firstNum = Number(input[0]);
let lastNum = Number(input[1]);

let output = "" 

for (i=firstNum; i<=lastNum; i++) {
    let numberAsString = i.toString();
    let evenSum = 0;
    let oddSum = 0 

    for (let index= 0; index<numberAsString.length; index++) {
 
    let currentNumber = Number(numberAsString[index]) 
    
        if (index%2===0) {
            evenSum+=currentNumber 
        } else {
            oddSum+=currentNumber 
        }
    }
    if (evenSum===oddSum) {
        output+= i + " " 
    }
}
console.log (output)

}
solve (["123456",
"124000"])
