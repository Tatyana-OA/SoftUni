function sameNums (input) {
    input=input.toString().split('')
    let sum = 0;
    let firstDigit = Number(input[0]);
    let checker = input.filter(x => {
       return x==firstDigit;
    })
    for (el of input) {
        sum+=Number(el)
    }
    
    if (checker.length==input.length) {
        console.log(`true`)

    } else {
    console.log(`false`)
    }
    console.log(sum)
}
sameNums(2222222)
sameNums(1234)
