function race(input){
    let participants = input.shift().split(", ")
    let wordReg = /[A-Za-z]+/g
    let numberReg =/\d+/g
    let participantsObj = {}
    let finalResult = []
    
    let finalKm = 0;
    for (let line of input) {
        finalKm=0;
        if (line==='end of race') {
            break;
        }
        let currentName = line.match(wordReg).join("")//joins all letters, forming the name
        let currentKm= (line.match(numberReg)).join("")//join, за да избегнем грешката с едно до друго
        currentKm=currentKm.split("").map(Number)
        for (let digit of currentKm) {
            
            finalKm+= Number(digit)
        }
        
        if (!participantsObj.hasOwnProperty(currentName)) {
            participantsObj[currentName]=0;
        }
            participantsObj[currentName]+=finalKm
        
       
        nameArr=[]
        finalKm= []
        
    }
   // console.log(participantsObj)
    let toArray = Object.entries(participantsObj)
    let sortedArr = toArray.sort( (a,b) => {
        let kmA=a[1]
        let kmB=b[1];

        return kmB-kmA;
    })
    //console.log(sortedArr)
    for (let [participant,km] of sortedArr) {
        if (participants.includes(participant)) {
            finalResult.push(participant)
           
        }
    }
    finalResult.length=3;
    console.log(`1st place: ${finalResult[0]}`)
    console.log(`2nd place: ${finalResult[1]}`)
    console.log(`3rd place: ${finalResult[2]}`)
    }


race([
    `George, Peter, Bill, Tom`,
    `G4e@55or%6g6!68e!!@`,
    `R1@!3a$y4456@`,
    `B5@i@#123ll`,
    `G@e54o$r6ge#`,
    `7P%et^#e5346r`,
    `T$o553m&6`,
    `end of race`,
  ]);
