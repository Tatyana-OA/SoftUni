function gcd(num1,num2) {
num1=Number(num1);
num2=Number(num2);
let arr1 = [];
let arr2 = [];
for (let i=1; i<=num1; i++) {
    if (num1%i==0) {
        arr1.push(i)
    }
}
for (let j=1; j<=num2; j++) {
    if (num2%j==0) {
        arr2.push(j)
    }
}
let common = [];

for (el of arr1) {
    for (another of arr2) {
        if (el==another) {
            common.push(el)
        }
    }
}
console.log(common[common.length-1])


}

gcd(15, 5)
gcd(2154, 458)
