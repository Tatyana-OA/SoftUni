function factdiv (one, two) {
let firstFact = 1;
let secondFact = 1;
let result = 0;
for (let i=1; i<=one; i++){
    firstFact*=i;
}
for (let i=1; i<=two; i++){
    secondFact*=i;
}
result = firstFact/secondFact
console.log (result.toFixed(2))
}
factdiv(5,2)
factdiv(6,2)
