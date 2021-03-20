function sort(arr){
    let originalCopy = arr.slice(); // copies the original 
    let sortedDesc = arr.sort((a,b) => b-a) // descending
    let final = []

    let halved = sortedDesc.splice(arr.length/2).sort((a, b) => a - b)
    // console.log (sortedDesc)
    // console.log(halved)
 
    for (let i =0; i<=originalCopy.length/2; i++) { // we use the copy length for the loop
        let first = sortedDesc.shift(); // първи елемент е първият от 1 масив
        let second = halved.shift(); //втори елемент е първият от 2 масив

        final.push(first);
        final.push(second);
        }
if (final.includes(undefined)) {
    let spliced =final.splice(final.length-2,1)
}
           console.log (final.join(" "))

    }
    

  


sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
