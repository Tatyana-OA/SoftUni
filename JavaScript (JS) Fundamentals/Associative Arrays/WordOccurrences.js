function occur(input){
let myAssocArr = {};
let count=0;
let toCheck = [];
for (line of input) {
    myAssocArr[line]=0
}

for (let j=0; j<input.length; j++){
    count=0;
    let line = input[j]
    if (!toCheck.includes(line)) {
    for (let i=0; i<input.length; i++) {
        let current = input[i];
        if (line===current) {
            count++
            myAssocArr[line]=count;
            
        }
    }
} else {
    myAssocArr[line]
}
    toCheck.push(line)
}
let converted = Object.entries(myAssocArr)
let sorted = converted.sort((a,b) => b[1] - a[1])
for (line of sorted){
    console.log(`${line[0]} -> ${line[1]} times`)
}

}
