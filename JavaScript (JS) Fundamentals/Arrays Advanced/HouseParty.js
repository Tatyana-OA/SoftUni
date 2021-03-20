function party(arr){
    let theList = [];
    let going = false;


    for (let i=0; i<arr.length; i++){
        let current = arr[i];
        let currentArr = current.split(" ")
        let name = currentArr[0];
       if (currentArr.length==3) {
           going = true;
           if (!theList.includes(name)){
            theList.push(name)
           } else {
               console.log(`${name} is already in the list!`)
           }
          
       } else if (currentArr.length!==3 && theList.includes(name)) {
           let toSplice = theList.indexOf(name)
           theList.splice(toSplice,1)
       }
       else {
           going = false;
           console.log(`${name} is not in the list!`)
       }

    }
    console.log(theList.join("\n"))
}
    party(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
    )
