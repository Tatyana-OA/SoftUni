function solve(arr) {
    let map = new Map();
    let neighborhoods = arr[0].split(`, `);
    for (let neighborhood of neighborhoods) {
      map.set(neighborhood, []);
    }
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i].split(` - `);
      let neighborhood = current[0];
      let person = current[1];
      if (neighborhoods.includes(neighborhood)) {
        map.get(neighborhood).push(person);
      }
    }
let converted = Array.from(map)

let sorted  = converted.sort(([streetA,inhabitA],[streetB,inhabitB]) => {
let lengthA = inhabitA.length;
let lengthB = inhabitB.length;
return lengthB - lengthA
})

for (let line of sorted) {
    let street =  line[0];
    let inhab = line[1]
    let length = inhab.length;
    console.log(`${street}: ${length}`)
    for (let mini of inhab) {
        console.log(`--${mini}`)

    }
}
}
