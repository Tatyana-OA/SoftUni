function reset(input){
let initialString = input.shift();
//console.log(initialString)

for (line of input) {
    if (line==='Done') {
        console.log(`Your password is: ${initialString}`)
        break;
    }
    else if (line ===`TakeOdd`) {
        let concatenatedChars = '';
        for (let i =0; i<initialString.length; i++) {
            if (i%2!=0) {
                let charToConcat = initialString[i];
                concatenatedChars+=charToConcat;
               
            }
        }
        initialString=concatenatedChars
        console.log(concatenatedChars)
    } else if (line.includes('Substitute')) {
        let [command,toRemove, toSubstitute]=line.split(" ");
        if (!initialString.includes(toRemove)) {
            console.log(`Nothing to replace!`)
        } else {
            while (initialString.includes(toRemove)) {
                initialString=initialString.replace(toRemove,toSubstitute);
            }
            console.log(initialString)
        }     
  
    } else if (line.includes(`Cut`)) {
        let [command,start,length]=line.split(" ");
        start=Number(start);
        length=Number(length);
        let cutString = initialString.substring(start, start+length)
        initialString=initialString.replace(cutString,"")
        console.log(initialString)
    }
}
}
reset(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr', 
'TakeOdd',
'Cut 15 3',
'Substitute :: -',
'Substitute | ^',
'Done'])
