function calories(input) {
    let result = {};

    for (let i=0; i < input.length; i+=2) {
        let key = input[i];
        let value = Number(input[i+1])
        result[key]=value 
        // each key will be what is behind the variable 'key' and it will be equal to what is behind 'value'
    }
return result;
}
console.log(calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))
