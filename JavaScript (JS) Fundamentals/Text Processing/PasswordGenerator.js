function password(input){
    let stringOne = input.shift();
    let stringTwo = input.shift();
    let word = input.shift().split("");
    let wordSafe = [];
    let myRegExp = /[ioeau]/g;
    let concatenatedString = stringOne.concat(stringTwo).split("").join("");
    let matchedVowel = myRegExp.exec(concatenatedString)
    let replacedConcat = concatenatedString;
    let counter=0;
    while (matchedVowel!=null){
         //i, o, e, a, u -> vowels
        let currentVowel = matchedVowel[0]
        let symbol = word[counter].toUpperCase();
        replacedConcat=replacedConcat.replace(currentVowel,symbol)
        counter++
        if (counter==word.length){
            counter=0;
        }
        matchedVowel = myRegExp.exec(concatenatedString) 
    }
    let reversed = replacedConcat.split("").reverse()
    console.log(`Your generated password is ${reversed.join("")}`)
 

    
   
    //replace them with symbols from word 
    //if word lenth is shorter, start again from index 0;
    //reverse

}password([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )
