function validity(x1,y1,x2,y2){

    function getResult (x1,y1,x2,y2) {
        //nested function that calculates distance between two points
        let distance = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));
        return Number.isInteger(distance) ? 'valid' : 'invalid'
        // = if the distance is an integer, return valid; if not - invalid
    }

    //return of function 'validity' - uses calculations from function 'getResult
    return `{${x1}, ${y1}} to {0, 0} is ${getResult(x1,y1,0,0)}\n` +
    `{${x2}, ${y2}} to {0, 0} is ${getResult(x2,y2,0,0)}\n` +
    `{${x1}, ${y1}} to {${x2}, ${y2}} is ${getResult(x1,y1,x2,y2)}`;
    //each row of return uses getResult function with different parameters
    //depending on which result should be printed out

}
console.log(validity(3, 0, 0, 4))
console.log(validity(2, 1, 1, 1))

// logs the result of the whole function - which is the 3-row return statement
