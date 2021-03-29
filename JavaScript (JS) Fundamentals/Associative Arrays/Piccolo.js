function cars(input){
    let parking = {};
    
    for (line of input){
        let [action,numberCar]=line.split(", ")
        if (action=="IN"){
            parking[numberCar]=1;
            //if the car is inside
        }else {
            delete parking[numberCar]
            //if it is taken outside; using "Delete"
        }
    }
    // turn into an array in order to solve it 
    let converted = Object.entries(parking)
    if (converted.length<1) {
        console.log(`Parking Lot is Empty`)
    } else {
        let sorted = converted.sort(([numA,stateA],[numB,stateB]) => numA.localeCompare(numB));
        sorted.forEach(element => {
            console.log(element[0])
        });
    }
    
    

}
