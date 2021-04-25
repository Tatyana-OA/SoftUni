function diagSums(matrix) {
    let result = []
    let sumOne = 0;
    let sumTwo = 0;
    for (let i = 0; i<matrix.length; i++) {
        sumOne += matrix[i][i]
        sumTwo += matrix[i][matrix.length-i-1]
    }
    result.push(sumOne,sumTwo)
    return result.join(" ")

}
console.log(diagSums([[20, 40],
    [10, 60]]
   ))
console.log(diagSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   ))
