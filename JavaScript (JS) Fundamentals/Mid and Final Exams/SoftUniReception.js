function reception(input){
    let eff1 = Number(input.shift());
    let eff2 = Number(input.shift());
    let eff3=Number(input.shift());
    let questions = Number(input.shift())
    combinedEfficinecyPerHour = eff1+eff2+eff3
    let hourCount = 1;

    while (questions>0) {
        if (hourCount%4!=0) {
            questions-=combinedEfficinecyPerHour;
        } else {
            questions=questions
        }
       hourCount++

    }
    console.log(`Time needed: ${hourCount-1}h.`)


}
reception(['5','6','4','20'])
reception(['1','2','3','45'])
reception(['3','2','5','40'])
