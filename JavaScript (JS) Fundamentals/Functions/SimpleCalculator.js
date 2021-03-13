function solve (numOne, numTwo, operator) {
let result = 0;
    function multiply() {
        result = numOne*numTwo;
        return result;
    }
    function divide () {
        result = numOne/numTwo;
        return result;
    }
    function add (){
        result = numOne+numTwo;
        return result;
    }
    function subtract (){
        result = numOne-numTwo;
        return result;
    }

    switch (operator){
        case "multiply":
            console.log (multiply(numOne,numTwo))
            break;
        case "divide":
            console.log (divide(numOne,numTwo))
        break;
        case "add":
            console.log (add(numOne,numTwo))
        break;
        case "subtract":
            console.log (subtract(numOne,numTwo))
        break;
    }


}
