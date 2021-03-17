function negPos (arr){
    let newArr = [];

    for (let current of arr) {
        if (current<0) {
            newArr.unshift(current);
        }else {
            newArr.push(current)
        }
    }
    console.log(newArr.join("\n"))
}
