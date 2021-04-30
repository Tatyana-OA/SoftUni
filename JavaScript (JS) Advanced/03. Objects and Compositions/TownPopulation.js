function townPopulation(input) {
    let townObj = {};
    for (line of input) {
        let [town,population] = line.split(" <-> ");
        population=Number(population)

        if (townObj.hasOwnProperty(town)) {
            townObj[town] += population
        }else {
            townObj[town]=Number(population)
        } 

    }
 let result = Object.entries(townObj)
    for (el of result) {
        console.log(`${el[0]} : ${el[1]}`)
    }
}
console.log(townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
))
console.log(townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
))
