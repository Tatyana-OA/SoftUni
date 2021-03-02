function solve(input) {
    let string = input.toString(); 
    let sum = 0

    for (let i= 0; i<string.length; i++) { 
        let character = Number(string[i]) 
   
        sum += character;
       
    }
    if (sum.toString().includes(9)) { 
        console.log (`${input} Amazing? True`)
    } else {
        console.log (`${input} Amazing? False`)
    }
  
} solve (1233)
solve (999)
