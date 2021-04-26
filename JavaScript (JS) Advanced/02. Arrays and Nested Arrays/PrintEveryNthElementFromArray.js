function nthElement(input,num) {
    let result = []
    for (let i =0; i<input.length; i+= num) {
        result.push(input[i])
    }
    return result

    // return result = arr.filter((el, i) => i%num===0)
    // filters each element based on whether the index is "every num-th"
    // filter always returns an array including all filtered values
}
console.log(nthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))
console.log(nthElement(['dsa',
'asd', 
'test', 
'tset'], 
2
))
