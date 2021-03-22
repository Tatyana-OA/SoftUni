function convertJSON(obj){
    let converted = JSON.parse(obj); // converts string to object
    let entries = Object.entries(converted) // create entries into array
    for ([key, value] of entries) {
        //looping through each set of key + value
        console.log (`${key}: ${value}`)
    }

}
