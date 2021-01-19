function evenOdd (num1) {
    let number = Number(num1);
    let evenSolution = number % 2 ==0;
    if (evenSolution) {
        console.log("even")
    } else {
        console.log ("odd")
    }
}
evenOdd("5")
