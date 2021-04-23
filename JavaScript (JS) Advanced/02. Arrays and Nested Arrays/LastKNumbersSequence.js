function lastK(n,k){
let sequence = [1];

for (let i =0; i<n-1; i++) {
let toSum = sequence.slice(-k)
let result = toSum.reduce((acc, c) => acc+c)
sequence.push(result)
}
return sequence;
}
console.log(lastK(6, 3))
console.log(lastK(8, 2))
