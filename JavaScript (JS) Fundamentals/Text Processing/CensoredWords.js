function censored(input, word){
let wordLength = word.length;
console.log(input.split(word).join("*".repeat(wordLength)))
}
