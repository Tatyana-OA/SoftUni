function secret(input){
    let concealedMessage = input.shift();
    for (line of input) {
        if (line===`Reveal`){
            console.log(`You have a new text message: ${concealedMessage}`)
            break;
        }
        let [instruction,...args]=line.split(":|:")
        if (instruction===`ChangeAll`) {
            let oldString = args[0];
            let replacement = args[1];
            let regExp = new RegExp(oldString, "g");
            concealedMessage=concealedMessage.replace(regExp,replacement)
            console.log(concealedMessage)
        }else if (instruction===`Reverse`){
            let reversible = args[0]
           // console.log(reversible)
            let reversedString = [];
            for (letter of reversible) {
                reversedString.push(letter);
            }
            reversedString=reversedString.reverse().join("")
            if (concealedMessage.includes(reversible)) {
                concealedMessage=concealedMessage.replace(reversible,"")
                concealedMessage=concealedMessage+reversedString
                console.log(concealedMessage)
            } else {
                console.log(`error`)
            }
           
            }
            
        else if (instruction===`InsertSpace`) {
            let spaceInsert = Number(args[0])
            let firstPart = concealedMessage.substring(0,spaceInsert)
            let secondPart = concealedMessage.substring(spaceInsert,)
            concealedMessage= firstPart + " " + secondPart;
            console.log(concealedMessage)
        }
        
    }

}
secret([
    "heVVodar!gniV",
    "ChangeAll:|:V:|:l",
    "Reverse:|:!gnil",
    "InsertSpace:|:5",
    "Reveal",
  ])
// secret([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal'
//   ]
  
//   )
