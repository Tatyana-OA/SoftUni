function solution (num) {
    // solution returns a function which is annonymous and takes one parameter
    // the returned function adds the two numbers
    // in judge the annonym. function can change names
    return function (numTwo) {
        return num + numTwo
    }
}


console.log(solution(5))
