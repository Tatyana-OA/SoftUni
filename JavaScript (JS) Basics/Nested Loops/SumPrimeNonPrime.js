function solve(input) {
let index = 0 
let command = input[index]
let primeSum=0;
let nonPrimeSum=0;

while (command!="stop") { 
    let num = Number(command);
    if (num<0) { // за отрицателни
        console.log (`Number is negative.`)
    }else if (num===1) {
        primeSum+=num; 
    }else{ 
    let count = 0;
        for (let i =1; i<=num; i ++) { 
            if (num%i===0) { 
                count ++ 
            }
        }
        if (count===2) { 
            primeSum+=num;
        }else {
            nonPrimeSum+=num
        }
    }
    command = input[++index]
}
console.log (`Sum of all prime numbers is: ${primeSum}`)
console.log (`Sum of all non prime numbers is: ${nonPrimeSum}`)

}
solve (["30",
"83",
"33",
"-1",
"20",
"stop"]
)
