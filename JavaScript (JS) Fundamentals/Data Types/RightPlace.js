function solve (string, char, string2){
let newWord = string.replace(`_`,char);

if (newWord===string2) {
    console.log ("Matched")
} else {
    console.log ("Not Matched")
}

}
solve ('Str_ng', 'I', 'Strong')
solve('Str_ng', 'i', 'String')
