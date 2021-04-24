function smallestTwo(input) {
    let result = input.sort((a,b) => a-b)
    .slice(0,2)

    return result.join(" ")

}
console.log(smallestTwo([30, 15, 50, 5]))
console.log(smallestTwo([3, 0, 10, 4, 7, 3]))
