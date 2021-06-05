function solve (area,vol,input) {
    // parse input
    let figures = JSON.parse(input)
    // create a calculation f-n which takes any object
    // call it within that object (has values x, y, z)
     function calculations(obj) {
        let areaResult = Math.abs(area.call(obj))
        let volumeResult =  Math.abs(vol.call(obj))
        // return the object with area and volume
        // return of calculations fn
        return {
            area: areaResult,
            volume:volumeResult
        }
     }

     // for each input line (object), perform the calculations 
     // return them
    return figures.map(calculations)
    
 

}
console.log(solve(area,vol,`[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
    ))

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
