function kNums (arr) {
    let k = Number(arr[0]);
    let newArr = arr.slice(1)
let firstKElements = newArr.slice(0,k)
let lastKElements = newArr.slice (-k)
console.log (firstKElements.join(" "))
console.log (lastKElements.join(" "))
}
