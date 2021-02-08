function solve (input) {
    let minNumber = 10000000000;
    let index = 0;
    let command = input[index++] 
    while (command!=="Stop") { /
    
    let currentNumber = Number(command); 
    if (currentNumber<minNumber) { 
        minNumber=currentNumber 
        
    }
    command = input[index++] 
    
    }
    console.log(minNumber) 
    }

    solve (["100",
    "99",
    "80",
    "70",
    "Stop"])
