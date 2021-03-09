function solve(array) {
    let sumOdd = 0;
    let sumEven = 0;

    let toNum = 0;
    for (let i =0; i<=array.length - 1; i++) {
        toNum=Number(array[i]);
        if (toNum%2==0) {
            sumEven+=toNum;
        } else if (toNum%2!=0){
            sumOdd+=toNum;
        }
    }   
    let final = sumEven - sumOdd;
    console.log (final)
}
solve([1,2,3,4,5,6])
