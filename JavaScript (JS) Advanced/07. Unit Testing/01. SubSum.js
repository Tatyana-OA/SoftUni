function solve(arr, startingIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN
    }
    if (startingIndex<0) {
        startingIndex=0
    } if (endIndex>arr.length-1) {
        endIndex = arr.length-1
    }

   return arr.slice(startingIndex,endIndex+1).reduce((acc,c) => acc + Number(c), 0)

}
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300))
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(solve([10, 'twenty', 30, 40], 0, 2))
console.log(solve([], 1, 2))
console.log(solve('text', 0, 2))
