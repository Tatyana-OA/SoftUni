function solve(one, two, three){
let sum = one + two + three

let sumTocheck = Math.trunc(sum);

if (sumTocheck===sum) {
    console.log(`${sum} - Integer`)
} else {
    console.log(`${sum} - Float`)
}
}
solve (9, 100, 1.1)
solve (100, 200, 303)
