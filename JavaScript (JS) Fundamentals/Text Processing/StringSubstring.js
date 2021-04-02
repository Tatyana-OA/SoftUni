function substringing(one,two){
let extractThis = one.toLowerCase();
let extractFrom = two.split(" ")
let newArr = []

extractFrom.forEach(element => {
    element = element.toLowerCase();
    newArr.push(element)
});

if (newArr.includes(extractThis)) {
    console.log(extractThis)
}else {
    console.log(`${extractThis} not found!`)
}

}
