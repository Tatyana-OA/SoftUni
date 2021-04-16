function solve(num1,num2,num3) {
    let one = Number(num1);
    let two = Number(num2);
    let three = Number(num3);

    let largest = -999999999999999;
    let arr = [one,two,three];

    for (i of arr) {
        if (i>largest) {
            largest=i;
        }
    }
    console.log(`The largest number is ${largest}.`)

}

//solve(-3, -5, -22.5)
solve(5, -3, 16)
