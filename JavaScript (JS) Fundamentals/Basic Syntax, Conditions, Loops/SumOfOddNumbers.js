function solve (input) {
    let howMany = Number(input);
    let sum = 0;
    for (let i=1; i<=howMany*2; i++) {
        if (i%2!=0) {
            console.log (i)
            sum +=i
        } 
    }
    console.log (`Sum: ${sum}`)
} solve (5)
