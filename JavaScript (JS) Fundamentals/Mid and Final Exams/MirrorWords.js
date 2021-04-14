function mirror(input){
    let str = input.shift()
    let myRegExp = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
    let matchedPairs = str.match(myRegExp)
    let mirrorPairs = []
    //console.log(matchedPairs)
    if (matchedPairs!=null) {
        console.log(`${matchedPairs.length} word pairs found!`)
        for (line of matchedPairs) {
            line = line.substring(1, line.length-1)
            let word1 = '';
            let word2 = ''
            if (line.includes("#")) {
              [word1,word2] = line.split("##")
              //console.log(word1,word2)
            } else {
                [word1,word2] = line.split("@@")
            }
            let word2Reversed = []
            for (letter of word2) {
                word2Reversed.push(letter)
            }
            word2Reversed = word2Reversed.reverse().join("")
           // console.log(word1)
           // console.log(word2Reversed)
           if (word1===word2Reversed) {
            mirrorPairs.push([word1, word2])
           }
        }
        
        if (mirrorPairs.length>0) {
            console.log(`The mirror words are:`)
            let result = ''
            for (pair of mirrorPairs) {
                result+= `${pair[0]} <=> ${pair[1]}, `
            }
            console.log(result.substring(0,result.length-2))
            // gets rid of ending ", "
        } else {
            console.log(`No mirror words!`)
        }
       
        
    }else {
        console.log(`No word pairs found!`)
        console.log(`No mirror words!`)
    }

}
mirror([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])
    
//     )

    // mirror([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
    // mirror([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])

