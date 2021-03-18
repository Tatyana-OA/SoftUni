function process(arr) {
    let doubled = [];
    for (let i=0; i<arr.length; i++) {
        if (i%2==1) {
            let current = Number(arr[i]);
            current*=2;
            doubled.push(current)
            
        }
    }
    console.log(doubled.reverse().join(" "))
}
process([10, 15, 20, 25])
