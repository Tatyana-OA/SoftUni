function solve(input){
let slicingFirst = input.slice(0,input.length/2)
let slicingSecond = input.slice(input.length/2,input.length)
let arrFirst = []
let arrSecond = []

for (i of slicingFirst) {
    arrFirst.push(i)
}
for (m of slicingSecond){
    arrSecond.push(m)
}
console.log(arrFirst.reverse().join(""))
console.log(arrSecond.reverse().join(""))
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')
