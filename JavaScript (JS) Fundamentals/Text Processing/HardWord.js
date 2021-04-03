function hard(input){
    let boysLetter = input[0]
    let wordsArray = input[1]
    let myRegExp=/[_]+/g;

    let match = myRegExp.exec(boysLetter);

    while(match!=null){
        let current = match[0];
        let lengthOfMatch = current.length;
        for (let word of wordsArray){
            if (word.length==lengthOfMatch) {
                boysLetter = boysLetter.replace(current,word)
            }
        }
        match=myRegExp.exec(boysLetter)
    }

    console.log(boysLetter)

}
hard(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)
