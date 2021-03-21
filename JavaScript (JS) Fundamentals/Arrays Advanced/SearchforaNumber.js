function search(arr1,arr2){
    let  takeThisMany = arr2[0];
    let   deleteThisMany = arr2[1];
    let  collectThis = arr2[2];
    let occurances = 0;

    let fromBeginning = arr1.splice(0,takeThisMany)
    let deteled = fromBeginning.splice(0,deleteThisMany)

    for (i of fromBeginning) {
        if (i===collectThis) {
            occurances++
        }
    }

    console.log(`Number ${collectThis} occurs ${occurances} times.`)

}
