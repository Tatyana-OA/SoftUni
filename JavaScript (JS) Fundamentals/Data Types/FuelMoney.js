function solve(distance, passengers, priceLiterDiesel) {
// empty bus = 100 km with 7L diesel
// each person - +100 ml
let fuelCuzPassengers = 0.1 *passengers; // in liters
let fuelNeeded = (distance/100)*7;
fuelNeeded+= fuelCuzPassengers;

let final = fuelNeeded*priceLiterDiesel
console.log (`Needed money for that trip is ${final}lv.`)

}
solve (260, 9, 2.49)
