function occur(input){
    let words = input.split(" ")
    // iterate through words array to make them all lowercase to compare
    let myMap = new Map()
    //create a map to store them
    
    for (word of words){
        word = word.toLowerCase()
        if (!myMap.has(word)) {
            myMap.set(word,0)
            // setting an initial 0 value
        } 
        let toAdd = myMap.get(word)
        // we get the value, adding one to it for each additional occurrence
        myMap.set(word,toAdd + 1)

    }
    let arrTolog= [];
    let arrayForm = Array.from(myMap)
    arrayForm.forEach(el => {
        if (el[1]%2!==0) {
            arrTolog.push(el[0])
        }
    })
    console.log(arrTolog.join(" "))

}
