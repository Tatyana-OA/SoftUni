function upperCasedWords(str){
    let regExp = /[\w]+/g;
    let result = str.match(regExp)
    let final = []
    for (el of result) {
        final.push(el.toUpperCase())
    }
    console.log(final.join(", "))

}
upperCasedWords('Hi, how are you?')
upperCasedWords('hello')
upperCasedWords('good day! how are you?46 why?! ,are you here, though_smith, a')
upperCasedWords('Functions in JS can be nested, i.e. hold other functions')
