function choochoo(arr) {
    let wagons = arr[0].split(" ");
    let maxCapacity = Number(arr[1])
    let getRidOf = arr.splice(0,2) // remove indexes 0,1
    let numPart = 0;

    for (let i=0; i<=arr.length-1; i++) {
        let currentCommand = arr[i];
        if (currentCommand.includes("Add")) {
            let currentArr = currentCommand.split(" ")
            numPart = currentArr[1];
            wagons.push(numPart)
        } else {
            numPart = Number(currentCommand)
            for (let i = 0; i<wagons.length; i++) {
                let currentCapacity = Number(wagons[i])
                let addingPassenger = Number(currentCapacity+numPart);
                if (addingPassenger<=maxCapacity) {
                    numPart=0;
                    wagons.splice(i,1,addingPassenger)
                    break;
                }
            }
        }
     
       
    }
    console.log (wagons.join(" "))
