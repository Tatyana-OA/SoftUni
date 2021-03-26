function solve(input){
    let myAssocArray = {}

    for (line of input) {
        let [person, phone] = line.split(" ")
        myAssocArray[person]=phone;
    }
    for (let key in myAssocArray) {
        console.log(`${key} -> ${myAssocArray[key]}`)
    }
 

}
