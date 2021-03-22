function city(input) {
    let entries = Object.entries(input) // keys +values (as an array)
    for (let [ key, value ] of entries) // looping through keys and values of each entry
    // actually we look through an array, the first value of which is the key, the second value of which is the value
    {
          console.log(`${key} -> ${value}`);
        }


}
