function towns(arr){
    let myObj = {}; //empty object to store data
    for (let i =0; i<arr.length; i++){
    let split=arr[i].split(" | ")
    let town=split[0];
    let latitude=Number(split[1]).toFixed(2)
    let longitude=Number(split[2]).toFixed(2)
    myObj.town=town;
    myObj.latitude=latitude;
    myObj.longitude=longitude;
    console.log(myObj)
    }
}
