function solve (n1, n2, operator) {
    n1=Number(n1);
    n2=Number(n2);
    let calculate =0;
    switch (operator) {
    case "+":
    calculate=(n1+n2);
    break;
    case "-":
    calculate = (n1-n2);
    break;
    case "*":
    calculate = (n1*n2);
    break;
    case "/":
    calculate = (n1/n2).toFixed(2);
    break;
    case "%":
    calculate= (n1%n2);
    break;
    }
if (operator==="+" || operator==="-" || operator==="*") {
    if (calculate%2==0) {
    console.log (`${n1} ${operator} ${n2} = ${calculate} - even`)
    } else {
        console.log (`${n1} ${operator} ${n2} = ${calculate} - odd`)  
    }
} if (operator==="/" && (n2!=0)) {
    console.log (`${n1} / ${n2} = ${calculate}`)
} else if (operator==="/" && n2==0) {
    console.log (`Cannot divide ${n1} by zero`)
}  if (operator==="%" && (n2!=0)){
    console.log (`${n1} % ${n2} = ${calculate}`)
} else if (operator==="%" && (n2==0)) {
    console.log (`Cannot divide ${n1} by zero`)
}
}
solve ("112",
"0",
"/")





