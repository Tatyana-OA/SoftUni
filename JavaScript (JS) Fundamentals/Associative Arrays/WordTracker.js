function track(input){
    let sentence = input.shift().split(" ")
    let myAssocArray = {};
    // each word from the sentence we track goes into the assoc array

    for (el of sentence) {
        myAssocArray[el]=0
    }
    input.forEach(element => {
        if (myAssocArray.hasOwnProperty(element)) {
            myAssocArray[element]++
            // adds up to the initial 0 count whenever the same word is present
        }
    });
    // turn into an array to sort
   let sorted = Object.entries(myAssocArray).sort(([wordA,countA],[wordB,countB]) => {
    return countB-countA;
   })
sorted.forEach(el => {
    console.log(`${el[0]} - ${el[1]}`)
})
}
