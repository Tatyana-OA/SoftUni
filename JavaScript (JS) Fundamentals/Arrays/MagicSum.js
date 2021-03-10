function solve (arr,comparable) {
    let sumCompare = Number(comparable);
    let sum = 0;
    
    for (let i=0; i<arr.length; i++) {
        let current = Number(arr[i]);
        for (let j=i+1; j<arr.length; j++) {
            let toAdd= Number(arr[j])
            sum = current+toAdd;
            if (sum===sumCompare) {
                console.log (`${current} ${toAdd}`)
            }

        }

    }
}

solve ([1, 7, 6, 2, 19, 23],
    8
    )
solve ([14, 20, 60, 13, 7, 19, 8],
    27
    )
solve ([1, 2, 3, 4, 5, 6],
    6
    )
