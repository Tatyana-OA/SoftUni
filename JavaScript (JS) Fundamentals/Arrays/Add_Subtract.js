function solve (input) {
    let conseqIndex = 0;
    let result = []; // new array
    let firstSum = 0;
    let modifiedSum = 0;
for (let i=0; i<=input.length-1; i++) {
    conseqIndex=input[i];
    firstSum+=conseqIndex
    if (conseqIndex%2==0) {
        conseqIndex+=i;
    } else if (conseqIndex%2!=0){
        conseqIndex-=i;
    }
    modifiedSum+= conseqIndex;
    result.push(conseqIndex); // making them stick to the array
    
   // console.log (conseqIndex)
}
console.log (result)
console.log (firstSum)
console.log (modifiedSum)
}
solve ([5, 15, 23, 56, 35])
solve ([-5, 11, 3, 0, 2])
