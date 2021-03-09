function solve (array) {
    let isTrue = false;
    let toPrint = 0;

    for (let i= 0; i < array.length; i++) {
        let leftSum = 0; // за калкулация на сумите спрямо позицията на индекса
        let rightSum = 0;

        if (i!=0) {
            for (let j= 0; j < i; j++) {
                leftSum+= array[j]; // всички отляво до индекса
                
            }

        }
        if (i!=array.length) {
            for (let m = i+1; m < array.length; m++) {
                rightSum+= array[m]; // всички отдясно до индекса до края, не вкл.
                
            }

        }
        if (leftSum===rightSum) {
            isTrue=true;
            toPrint = i;
        } 

    }
    if (isTrue) {
        console.log (toPrint)
    } else {
        console.log ("no")
    }

}
solve ([1, 2, 3, 3])
solve ([1, 2])
solve ([1])
solve ([1, 2, 3])
solve ([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
