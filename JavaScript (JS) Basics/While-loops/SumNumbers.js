function solve (input) {
    let firstNumber= Number(input[0]); 
    let nextNumber=0; 
    let counter = 0; 
    let result = 0;

    while (counter < input.length) {
        counter ++; 
        nextNumber=Number(input[counter]);  
        result+= nextNumber 
    
        if (result>= firstNumber) {
            console.log (result)
            break;
        }
        
    }
    
}

solve (["20",
"1",
"2",
"3",
"4",
"5",
"6"])
