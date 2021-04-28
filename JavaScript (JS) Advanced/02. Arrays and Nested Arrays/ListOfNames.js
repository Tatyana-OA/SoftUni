function nameList (input) {

    let result = input.sort((a,b) => a.localeCompare(b));
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        console.log(`${index+1}.${element}`)
        
    }

}
console.log(nameList(["John", "Bob", "Christina", "Ema"]))
