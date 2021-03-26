function meet(input){
    let array = {};
    for (let line of input){
        let [day,person]=line.split(" ");
        if (array.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        }else {
            console.log(`Scheduled for ${day}`)
            array[day]=person 
        }
        
    }
    for (key in array){
        console.log(`${key} -> ${array[key]}`)
    }

}
