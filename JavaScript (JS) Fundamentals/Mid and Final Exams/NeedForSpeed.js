function speed(input){
    let allCars = Number(input.shift())
    let carCollection = {};
   //save in collection
    for (let i=0; i<allCars; i++) {
        let [carName, mileage, fuel] = input[i].split("|")
        if (!carCollection.hasOwnProperty(carName)) {
            carCollection[carName] = {
                mileage,
                fuel
            }
        } 
    }
    // do commands
    input = input.slice(allCars, )
    for (line of input) {
        if (line===`Stop`) {
            break;
        }
        let [action,carName,...others] = line.split(" : ")
        if (action===`Drive`) {
            let distance = Number(others[0]);
            let fuelNeeded = Number(others[1]);
            if (fuelNeeded>carCollection[carName].fuel) {
                console.log(`Not enough fuel to make that ride`)
            }else {
                carCollection[carName].mileage= Number(carCollection[carName].mileage)+distance;
                carCollection[carName].fuel = Number(carCollection[carName].fuel)-fuelNeeded;
                console.log(`${carName} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`)
            }
            if (Number(carCollection[carName].mileage)>=100000) {
                delete carCollection[carName]
                console.log(`Time to sell the ${carName}!`)
            }

        }else if (action===`Refuel`){
            let refueledAmt = Number(others[0]);
            let fuelAvailable = Number(carCollection[carName].fuel);
            let totalFuel = refueledAmt+fuelAvailable;
            if (totalFuel>=75) {
                let actualRefuel = 75-fuelAvailable;
                console.log(`${carName} refueled with ${actualRefuel} liters`)
                carCollection[carName].fuel = 75
            } else {
                console.log(`${carName} refueled with ${refueledAmt} liters`)
                carCollection[carName].fuel = Number(carCollection[carName].fuel) +refueledAmt
            }

        }else if (action===`Revert`) {
            let decreaseAmt = Number(others[0]);
            carCollection[carName].mileage= Number(carCollection[carName].mileage)-decreaseAmt;
            if (carCollection[carName].mileage<10000) {
                carCollection[carName].mileage=10000
            }else {
                console.log(`${carName} mileage decreased by ${decreaseAmt} kilometers`)
            }

        }
    }
   // console.log(carCollection)
    //sort mileage desc, name asc
    let toArr= Object.entries(carCollection);
   // console.log(toArr)
    let sorted = toArr.sort((a,b) => {
        let carNameA = a[0]
        let carNameB= b[0]
        let carAMileage = Object.values(a[1])[0];
        let carBMileage = Object.values(b[1])[0];
       
        return carBMileage-carAMileage || carNameA.localeCompare(carNameB);
        
    })
    //console.log(sorted)
    //print
    for (carStats of sorted) {
        let carName = carStats[0]
        let carMileage = Object.values(carStats[1])[0];
        let carFuel = Object.values(carStats[1])[1];
      console.log(`${carName} -> Mileage: ${carMileage} kms, Fuel in the tank: ${carFuel} lt.`)
    }

}

// speed([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
//   ])

speed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )
