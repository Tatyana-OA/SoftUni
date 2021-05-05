// USING REST INSTEAD OF CONCAT TO MAKE A RESULTING ARRAY FROM TWO SEPARATE ONES
let arr1 = [1,2,3,4]
let arr2 = ['a', 'b', 'c']
let result = [...arr1,...arr2]
console.log(result)

// concatenation of objects with spread
let objOne = {a:1, b:2, c:3};
let objTwo = {x: `a`, y:`b`, z:`c`};
let resultTwo = {...objOne, ...objTwo};
console.log(resultTwo);
