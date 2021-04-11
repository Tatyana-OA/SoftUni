function solve(input){
    let theRegExp = /([=\/])[A-Z][A-Za-z]{2,}\1/g;
    let validLocations = input.match(theRegExp)
    let travelPoints = 0;
    let result = []
   // console.log(validLocations)
   if (validLocations!=null) {
    for (destination of validLocations) {
    let destinationRegExp = /[A-z]+/g;
    destination=destination.match(destinationRegExp).toString()
     travelPoints+= destination.length;
     result.push(destination)
    }
    console.log(`Destinations: ${result.join(", ")}`)
    console.log(`Travel Points: ${travelPoints}`)
   } else {
    console.log(`Destinations:`)
    console.log(`Travel Points: 0`)
   }


}
 //solve('=Hawai=/Cyprus//Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
solve(`ThisIs some InvalidInput`)
