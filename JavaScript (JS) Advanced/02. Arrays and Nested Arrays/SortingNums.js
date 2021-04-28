function sortingNums(input) {
    let result = []
    let sortedAsc = input.sort((a,b) => a-b)
            for (let i=sortedAsc.length; i>0; i-=2){
                let smallNum= sortedAsc.shift()
                let bigNum = sortedAsc.pop()
            result.push(smallNum)
            result.push(bigNum)
          
        }

    
    return result
}
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
