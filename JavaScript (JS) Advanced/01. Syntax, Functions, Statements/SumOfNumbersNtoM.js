function numbersSum(n,m) {
let num1 = Number(n);
let num2 = Number(m);
let result = 0

for (let i =num1; i<=num2; i++) {
    result+=i
}
console.log(result)
}
numbersSum('1', '5' )
numbersSum('-8', '20')
