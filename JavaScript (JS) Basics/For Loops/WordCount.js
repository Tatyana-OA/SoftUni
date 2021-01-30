function solve (text) {
    let count=0
    let words = 0
    for (let i = 0; i < text.length; i += 1) {
        let currentIndex = text[i];
        if (currentIndex===" ") {
        count +=1;
        }
       
    }
    if (count>9) {
        words=count+1;
        console.log (`The message is too long to be send! Has ${words} words.`)
    } else if (count<=9) {
        console.log (`The message was send successfully!`)
    }
}
solve ("This message has ten words and you can send it!")
