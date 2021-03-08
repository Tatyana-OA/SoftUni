function solve(n,arr) {
    let newArr = arr;
    newArr.length = n;
    let result= '';

    for (let i=n-1; i>=0; i--) {
        result += newArr[i];
        result += ' '
        
    }
    console.log (result)
}

solve (3, [10, 20, 30, 40, 50])
