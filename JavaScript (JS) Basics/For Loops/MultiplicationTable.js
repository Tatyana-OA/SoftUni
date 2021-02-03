function solve (num) {
    num= Number(num);
    let sum=0;

    for (let i=1; i<=10 ; i++) {
        sum = num*i;
        console.log (`${i} * ${num} = ${sum}`)

    }

} solve (5)
