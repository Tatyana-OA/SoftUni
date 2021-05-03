function carFactory(input) {
    // defining all functions that the object uses
   const getEngine = function(power){
       //array to store object values that will be used
    let engineTypes = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ]
    // find which object value the function returns
    if (power<=90) {
        return engineTypes[0]
    } else if (power>=90 && power<120) {
        return engineTypes[1]
    } else {
        return engineTypes[2]
    }
   }
   const getCarriage = function(type,color) {
       // return value of the function is the type and the color in the input
       return {
           type,
           color,
       }

   }
   const getwheels = function(wheelsize) {
   let wheel= Math.floor(wheelsize) % 2 === 0 
    ? Math.floor(wheelsize) - 1 
    : Math.floor(wheelsize)
    return [wheel, wheel, wheel, wheel]
   }

// in the objects the functions receive the values themselves a.k.a input.value
// the functions above work with mock values that are then replaced with the object ones
    let objResult = {
        model: input.model,
        //function  as the value of each key with the respective param it takes from the input
        engine: getEngine(input.power),
        carriage: getCarriage(input.carriage, input.color),
        wheels: getwheels(input.wheelsize)
    }

    return objResult
}
console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))
console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
))
