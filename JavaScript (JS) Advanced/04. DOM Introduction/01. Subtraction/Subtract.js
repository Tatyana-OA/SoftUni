function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value
    let sum = firstNum-secondNum;
    let result = document.getElementById('result')
    result.textContent = sum

    console.log('result');
}
