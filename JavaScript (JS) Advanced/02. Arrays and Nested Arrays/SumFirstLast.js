function FirstLast (input) {
    input = input.map(Number);
    let first = input.shift();
    let last = input.pop();

    return first + last;

}
console.log(FirstLast(['20', '30', '40']))
console.log(FirstLast(['5', '10']))
