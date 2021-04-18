function circle(input) {
if (typeof(input)==='number') {
    let radius = Number(input);
    let area = Math.PI* (Math.pow(radius,2))
    
    console.log(area.toFixed(2))
} else {
    console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`)
}
}
circle(5)
circle('name')
