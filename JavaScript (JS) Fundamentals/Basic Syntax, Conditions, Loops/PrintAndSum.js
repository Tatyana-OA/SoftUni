function solve (start, end) {
    let startNum = Number(start);
    let endNum = Number(end);
    let sum=0
    let s = ``; // create a string


    for (let i=startNum; i<=endNum; i++) {
        s += i + ` ` // to create a space after i
        sum +=i;
      
    }
    console.log (s) // out of loop to print whole expression on single line
    console.log (`Sum: ${sum}`)
}
