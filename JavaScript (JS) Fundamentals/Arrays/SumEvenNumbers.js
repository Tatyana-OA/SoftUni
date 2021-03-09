function solve(arrayStrings) {
    let toNum = 0;
    let sum = 0;
    for (let i =0; i<=arrayStrings.length - 1; i++) {
        toNum=Number(arrayStrings[i]);
        if (toNum%2==0) {
            sum+=toNum;
        }
    }
    console.log (sum)
} solve (['1','2','3','4','5','6'])
