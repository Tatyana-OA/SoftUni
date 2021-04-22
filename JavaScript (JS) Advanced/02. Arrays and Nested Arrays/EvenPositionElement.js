function evenPosition (input) {
let result = []
for (i=0; i<input.length; i+=2){
result.push(input[i])
}
return result.join(" ")
}
console.log(evenPosition(['20', '30', '40', '50', '60']))
console.log(evenPosition(['5', '10']))
