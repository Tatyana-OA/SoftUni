function rotate(arr,num) {
    for (let i=0; i<num; i++) {
        let poppedOut = arr.pop();
        arr.unshift(poppedOut)
    }
 return arr.join(" ")
}
console.log(rotate(['1', 
'2', 
'3', 
'4'], 
2
))
console.log(rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
))
