function equalNeighbours(input) {
    let count=0;
    let checker = input[0];
    for (j=1; j<input.length; j++) {
        let secondArr = input[j]
        for (let i=0; i<checker.length; i++) {
            let element = checker[i]
            for (let m=i+1; m<checker.length; m++) {
                let elnext = checker[m]
                if (element==elnext) {
                    count++
                }
                break;
            }
            for (let h=0; h<secondArr.length; h++) {
                let element2=secondArr[h]
                if (element==element2 && i==h) {
         
                        count ++
                   
                } 
            }
        }
        checker = input[j]
        if (j+1==input.length) {
            for (let k=0; k<checker.length; k++) {
                let one = checker[k];
                for (let l=k+1; l<checker.length; l++) {
                    let two = checker[l];
                    if (one==two) {
                        count++
                    }
                    break;
                }
            }
        }
       
    }
   

//    }
   return count
   
}
console.log(equalNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
))
console.log(equalNeighbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
))
console.log(equalNeighbours([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]))
