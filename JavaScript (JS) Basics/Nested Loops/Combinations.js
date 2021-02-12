function solve (n) {
    let validCounts = 0;
   let num=Number(n[0]);
    // 1x+2x+3x = n

    for (let x1=0; x1 <=num; x1++) {
        for (let x2=0; x2<=num; x2++) {
            for (let x3=0; x3<=num; x3++) {
                if (x1+x2+x3===num) {
                    validCounts++
                }
            }
    }
}
console.log (validCounts)
}

solve ([25])
