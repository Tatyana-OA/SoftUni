function solve (num) {
    num= Number(num);
    let sum=1; // factorial
    for (let i=1; i<=num; i++) { // 1,2,3,4
        sum=i*sum; // factorial е фиксиран = 1; i на всяка итерация с +1; 1*1 -> 1*2 -> 1*3 (1*2*3*4....)
        
    }
    console.log (sum)
}
solve (4)
