function extract(input) {
    let result = [];
    let tinyNum = -99999999999999;
    for (let i=0; i<input.length; i++) {
       let currentNum = input[i];
       if (currentNum>=tinyNum) {
           tinyNum=currentNum;
           result.push(tinyNum)
       }
    }
return result;
// ---- REDUCE SOLUTION ----
// return arr.reduce(function(result,currentValue,index,initialArr) {
// if (currentValue >= result [result.length-1]) {
// result.push(currentValue)
// }
//return result;
//}, [])

// >>> result - accumulator, which takes initial value of empty array []
// >>> currentValue - each value in the array (as in a loop)
// >>> index is current index and initialARR is the arr itself
// if-statement checks if the currentValue is larger or equal to the last one in the array


}
console.log(extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ))
console.log(extract	([1, 
    2, 
    3,3,
    4]
    ))
    console.log(extract([20, 
        3, 
        2, 
        15,
        6, 
        1]
        ))
