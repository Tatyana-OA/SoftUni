function numbers(input){
    let array = input.split(" ").map(x => Number(x))
    let sum=0;
    let greaterNums = [];
    array.forEach(element => {
        sum+=element;
    });
    let average = Number((sum/array.length).toFixed(2));

    for(el of array){
        if (el>average) {
            greaterNums.push(el)
        } 
    } 
    let sorted = (greaterNums.sort((a,b) => b-a));
    if (greaterNums.length<=1) {
        console.log('No')
    }
    
    else if (greaterNums.length>1 && greaterNums.length<=5){
        console.log(sorted.join(" "))
    } else if (greaterNums.length>5) {
        greaterNums.length=5;
        console.log(sorted.join(" "))
    }


}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('0')
numbers('-1 -2 -3 -4 -5 -6')
