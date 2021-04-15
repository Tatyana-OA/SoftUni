function solve(input){
    let thisMany = Number(input.shift());
    let patternRg = /([*@])[A-z][a-z]{2,}\1: (\[[A-Za-z]\]\|){3}$/g;
    let justLetters = /[A-Za-z]/g;
    let justTag = /([*@])[A-z][a-z]{2,}\1/g;
    let lettersToAscii = [];
   for (let i=0; i<thisMany; i++) {
       let line = input[i];
       let checkValid = line.match(patternRg);
       if (checkValid!=null) {
           let [tag, letters] = line.split(": ")
           let trialMatch = tag.match(justTag)
           //console.log(tag)
           //console.log(letters)
           let lettersFound = letters.match(justLetters);
           for (letter of lettersFound) {
            let asciiSign = letter.charCodeAt();
            lettersToAscii.push(asciiSign)
           }
           let cleanTag = trialMatch[0].substring(1, tag.length-1)
           cleanTag = cleanTag.match(/[A-z][a-z]{2,}/g)
           console.log(`${cleanTag[0]}: ${lettersToAscii.join(" ")}`)
           lettersToAscii=[]
           //decrypt
       }else {
           console.log(`Valid message not found!`)
       }
       
   }

}
solve(["3",
    "*Request*: [I]|[s]|[i]|",
    "*Taggy@: [73]|[73]|[73]|",
    "Should be valid @Taggy@: [v]|[a]|[l]|",])

    // solve (["3",
    //     "@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid",
    //     "*tAGged*: [i][i][i]|",
    //     "Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|"])
