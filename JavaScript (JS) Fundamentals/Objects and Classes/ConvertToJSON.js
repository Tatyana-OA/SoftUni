function toJSON(name,lastName,hairColor) {
    //set strings into an object
    let myObj={};
    myObj.name = name;
    myObj.lastName=lastName;
    myObj.hairColor=hairColor;
    // convert to JSON string

    let stringifiedObj = JSON.stringify(myObj);
    console.log(stringifiedObj)


}
