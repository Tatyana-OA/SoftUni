function solve (number) {
    numberInput = Number(number);
    if (numberInput < 100) {
        console.log ("Less than 100")
    } else if (numberInput >= 100 && numberInput <=200) {
        console.log ("Between 100 and 200")
    } else {
        console.log ("Greater than 200")
    }
}
solve ("-5")
