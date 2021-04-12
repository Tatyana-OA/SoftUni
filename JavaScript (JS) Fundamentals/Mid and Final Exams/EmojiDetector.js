function detect(input){
    input=input.toString();
    let emojiDetector =/((::)|(\*\*))[A-Z][a-z][a-z]+\1/g;
        let digitsDetector = /\d/g;
    let coolThreshold = 1;
    let digitsToMultiply = input.match(digitsDetector).map(Number) // match -> gives an array
    for (digit of digitsToMultiply){
        coolThreshold*=digit;
    }
    console.log(`Cool threshold: ${coolThreshold}`)
   
    let validEmojis = input.match(emojiDetector)
    console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`)
    for (emoji of validEmojis) {
        let emojiSliced = emoji.substring(2,emoji.length-2) // slices without first and second :: or **
        let emojiCool = 0;
        for (letter of emojiSliced) {
            let asciiCode = letter.charCodeAt();
            emojiCool+=asciiCode
        }
    if (emojiCool>coolThreshold) {
        if (validEmojis.includes(emoji)) {
            console.log(emoji)
        }
    }
    }
   
}//detect('In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**')
detect('5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::')
