function party(input){
let partyList = {
    'VIP' : [],
    'regular' : []
    // the object consists of two empty arrays for each type of quests
}
//iterate until command "Party" to get all invites
let command = input.shift();
while (command!="PARTY"){
   // check if the first symbol of the reservation is a number, if so -> VIP
   let char = command[0];
   if (isNaN(char)){
    // it's a letter, so regular
    partyList['regular'].push(command)
    // we push the number into the empty regular array
   } else {
    partyList['VIP'].push(command)
   }

   command=input.shift() //to change to next command and keep on whilin`
}

input.forEach(element => {
    // iterating through the remaining commands after party to see who doesn't come
    if(partyList['VIP'].includes(element)) {
        let indexofElement = partyList['VIP'].indexOf(element);
        partyList['VIP'].splice(indexofElement,1)
        //deleting the guest at a particular index in partyList
    } else if (partyList['regular'].includes(element)) {
        let indexofElement = partyList['regular'].indexOf(element);
        partyList['regular'].splice(indexofElement,1)
        //deleting the guest at a particular index in partyList
};
})
// output -> number of guests (two lengths of two arrays combined)
//each guest 
let lengths = partyList['VIP'].length+partyList['regular'].length;
console.log(lengths)
for (j of partyList['VIP']) {
    console.log(j)
}
for (i of partyList['regular']) {
    console.log (i)
}
}
