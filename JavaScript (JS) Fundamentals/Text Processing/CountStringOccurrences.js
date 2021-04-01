function counting(input,trace){
    let count=0;
let toIterate = input.split(" ")
toIterate.forEach(element => {
    if (element===trace){
        count++
    }
});
console.log(count)
}
