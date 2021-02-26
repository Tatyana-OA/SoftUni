function solve (num) {
    let givenNum = Number(num);
    

    for (let i= 1; i<= givenNum; i++) {
        let output = ``; // empty string
        for (let j=1; j<=i; j++) {
            output += i + " " // each time it rolls, add one and an empty space
        }
       console.log (output)
    }


} solve (3)
