function manipulation (arr){
    let arrayToManipulate = arr[0].split(" ");  //creates string
    let arrOfCommands = arr.slice(1,arr.length) // creates array of commands
    
    for (let i=0; i<=arrOfCommands.length-1; i++) {
        let currentCommand = arrOfCommands[i].split(" ") // command in an array
        let wordPart = currentCommand[0]
        let numPart = Number(currentCommand[1])
        let ifInsert = Number(currentCommand[2])
            if (wordPart==="Add") {
                arrayToManipulate.push(numPart)
            } else if (wordPart==="Remove"){
                arrayToManipulate = arrayToManipulate.filter(x => x !=numPart); // filters everything that is not the number, excludes it

            } else if (wordPart==="RemoveAt") {
                let removedAt = arrayToManipulate.splice(numPart,1) // start at an index and remove one; returns the removed and automatically changes the array

            } else {
                let inserted = arrayToManipulate.splice(ifInsert,0,numPart) //inserts a certain number (at a certain index without removing any), returns it; modified the array automatically
            }
       

    }

    console.log(arrayToManipulate.join(" "))

}
