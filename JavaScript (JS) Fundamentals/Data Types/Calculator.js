function solve(n, oper, anothern) {
    let first = Number(n);
    let second = Number(anothern);
    let result = 0;

 if (oper==="+") {
     result = first + second;

 }else if (oper==="-"){
    result = first - second;
 }else if (oper==="*"){
    result = first * second;
 }else if (oper==="/") {
    result = first / second;
 } else if (oper==="%") {
    result = first % second;
 }

console.log (result.toFixed(2))
}

solve (5,
    '+',
    10
    )

    solve (25.5,
        '-',
        3
        )
