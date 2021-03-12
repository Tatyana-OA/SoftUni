function solve(arrOne, arrTwo) {
    let firstToNum = 0;
    let secondToNum = 0;
    let firstSum = 0;
    let secondSum = 0;
    let identical = true;
    for (let i=0; i<=arrOne.length-1; i++) {
        firstToNum= Number(arrOne[i]);
        firstSum+=firstToNum;
    }
    for (let j=0; j<=arrTwo.length-1; j++) {
        secondToNum= Number(arrTwo[j]);
        secondSum+=secondToNum;
    }
    for (let i=0; i<=arrOne.length-1; i++) {
        if(arrOne[i]!==arrTwo[i]) {
            identical = false;
            console.log (`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if (identical==true) {
        console.log (`Arrays are identical. Sum: ${firstSum}`)
    }

}
