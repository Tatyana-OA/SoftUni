function memory(input){
    let counter = 0;
    let sequence = input.shift().split(" ")
    let end=input.pop();

    for (elements of input) {
        let command = elements.split(" ")
        let indexOne = Number(command[0])
        let indexTwo = Number(command[1])
        counter ++;

        if (indexOne<0 ||indexTwo<0) {
            console.log(`Invalid input! Adding additional elements to the board`)
            sequence.splice(sequence.length/2,0,`-${counter}a`)
            sequence.splice(sequence.length/2,0,`-${counter}a`)
        }
        else if (sequence[indexTwo]!=sequence[indexOne]) {
            console.log("Try again!")
        } 
        else if (sequence[indexOne] = sequence[indexTwo]) {
            console.log(`Congrats! You have found matching elements - ${sequence[indexTwo]}!`)
            if (indexTwo>indexOne) {
                sequence.splice(indexTwo,1)
                sequence.splice(indexOne,1)
            } else {
                sequence.splice(indexOne,1)
                sequence.splice(indexTwo,1)
                
            }                 
        } 
        if (sequence.length<1) {
            break;
        }
    }
    if (sequence.length<1) {
        console.log(`You have won in ${counter} turns!`)
    }else {
        console.log("Sorry you lose :(")
        console.log(sequence.join(" "))
    }
}
memory( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    )
// memory([
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
//     )
// memory([
//     "a 2 4 a 2 4", 
//     "4 0", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
//     )
