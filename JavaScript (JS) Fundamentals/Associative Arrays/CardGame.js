function game(input){

let total = 0;
//create object to store people and cards
let peopleAndCards = {}
//manipulate input into arrays 
for (line of input){
    let [name,cardHand] = line.split(": ")
    cardHand=cardHand.split(", ")
    //store into object in a way so that if there isnt a key, add it
    //value is an empty array so we can use Push
    //make sure additional cards are added rather than overwritten
    if (!peopleAndCards.hasOwnProperty(name)) {
        peopleAndCards[name]=[]
    }
    peopleAndCards[name].push(...cardHand)
    //...variable means push them in their order (works here cuz it's an array) 
}
//convert to Set to get rid of doubled ones
//iterate through the object, take values and make them into sets
for (let key in peopleAndCards) {
    let eachHand = peopleAndCards[key]
    let setHand = new Set(eachHand)
    peopleAndCards[key]=setHand
}
//calculate using the measures
for (let key in peopleAndCards) {
    let cardSeq = Array.from(peopleAndCards[key])
    total=0
    //take last character from each card because it's always a letter
    cardSeq.forEach(x => {
        
        let chars = x.split('')
        let lastChar = chars.pop()
        if (lastChar==='S') {
            lastChar=4;
        } else if (lastChar==='H') {
            lastChar=3;
        }else if (lastChar==='D') {
            lastChar=2;
        }else if (lastChar==='C') {
            lastChar=1
        }
        let multiple = 0;
        if (chars.length>1) {
            multiple=10;
        }
        else if ((chars.length)=1){
            multiple=chars[0]
            if (isNaN(multiple)) {
                switch(multiple) {
                    case'J':
                    multiple=11;
                    break;
                    case'Q':
                    multiple=12;
                    break;
                    case'K':
                    multiple=13;
                    break;
                    case'A':
                    multiple=14;
                    break;
                }
            }
            else {
                multiple = chars[0]
            }
        } 
         total += (Number(lastChar)*Number(multiple))
       
    })
    console.log(`${key}: ${total}`)  // console.log(cardSeq)
}
}
