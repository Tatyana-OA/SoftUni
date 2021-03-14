function solve (num) {
    let evenSum = 0;
    let oddSum = 0;
    let numToString = num.toString().split(""); // to string - splitting w/o delimiter into an array
    for (let i=0; i<numToString.length; i++) {
        let current = Number(numToString[i])
        if (current%2==0) {
            evenSum+=current
        } else {
            oddSum+=current;
        }
    }
    console.log (`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}
solve (1000435)
