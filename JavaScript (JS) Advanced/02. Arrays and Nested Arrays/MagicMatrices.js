function magicMatrix(input) {
    let leftRightSums = [];
    let columnSums = [];
    let sumOne = 0;
    let sumTwo =0;
    for (let i =0; i<input.length; i++) {
        let currentRow = input[i]
        sumOne = currentRow.reduce((acc,c) => acc+c)  
        leftRightSums.push(sumOne) 
        sumOne = 0    
        for (let j=0; j<input.length; j++) {
            let matrixRow = input[j]
            sumTwo += matrixRow[i]
        }  
        columnSums.push(sumTwo)
        sumTwo=0;
}
leftRightSums=leftRightSums.reduce((acc,c) => acc==c ? c:-1) 
columnSums=columnSums.reduce((acc,c) => acc==c ? c:-1) 
if (leftRightSums!== -1 && columnSums!==-1 && columnSums==leftRightSums) {
    return 'true'
} else {
    return `false`
}

}
console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ))
   console.log(magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ))
   console.log(magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ))
