function address(input){
    let myAssocArray = {}
    for (let line of input){
       let [person,address]=line.split(":")
       myAssocArray[person]=address
    }

//conversion to an array
    let converted = Object.entries(myAssocArray)
    //sorting it out 
    // a - an array with person + address (b - same)
    // a[0] is the name
    converted.sort((a,b) => a[0].localeCompare(b[0]))
    
    for (let line of converted){
        console.log(`${line[0]} -> ${line[1]}`)
    }
}
