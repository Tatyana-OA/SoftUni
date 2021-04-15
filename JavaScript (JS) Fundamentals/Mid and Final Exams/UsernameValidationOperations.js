function solve(input){
    let userName = input.shift();
    //console.log(userName)
    for (line of input) {
        if(line===`Sign up`) {
            break;
        }
        let [command,...args] = line.split(" ");
        if (command===`Case`) {
            let caseMode = args[0];
            if (caseMode===`lower`) {
                userName= userName.toLowerCase();
                console.log(userName)
            }else if (caseMode===`upper`) {
                userName= userName.toUpperCase();
                console.log(userName)
            }

        }else if (command===`Reverse`) {
            let startIndex = Number(args[0]);
            let endIndex = Number(args[1]);
            if (startIndex>=0 && startIndex<userName.length && endIndex>=0 && endIndex<userName.length){
                let subString = userName.substring(startIndex,endIndex+1);
                let reversedSubstring = []
                for (letter of subString) {
                    reversedSubstring.push(letter)
                }
                console.log(reversedSubstring.reverse().join(""))
            }

        }else if (command===`Cut`) {
            let toCheck = args[0];
            if (userName.includes(toCheck)) {
                let myRegExp = new RegExp(toCheck, "g");
                userName= userName.replace(myRegExp, "");
                console.log(userName)
            }else {
                console.log(`The word ${userName} doesn't contain ${toCheck}.`)
            }

        }else if (command===`Replace`) {
            let charToReplace = args[0];
            let regExpChar = new RegExp(charToReplace, "g");
            userName=userName.replace(regExpChar,"*")
            console.log(userName)

        }else if (command===`Check`) {
            let charValid = args[0];
            // let validation = new RegExp(charValid, "g");
            // let validUsername = userName.match(validation);
            if (userName.includes(charValid)) {
                console.log(`Valid`)
            } else {
                console.log(`Your username must contain ${charValid}.`)
            }

        }

    }

}
solve(["Peter","Case lower","Cut ES", "Check @", "Sign up"])
// solve (["ThisIsMyString",
//     "Reverse 1 4",
//     "Replace i",
//     "Cut My",
//     "Sign up"])
