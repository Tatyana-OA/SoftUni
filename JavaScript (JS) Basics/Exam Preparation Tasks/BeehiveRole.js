function solve (intellect,power,gender) {
    let intellectNum=Number(intellect);
    let powerNum=Number(power);

    if (intellectNum>=80) {
        if (powerNum>=80 && gender==="female"){
            console.log("Queen Bee")
        } else {
            console.log ("Repairing Bee")
        }
    }
    else if (intellectNum>=60 && intellectNum<80) {
        console.log ("Cleaning Bee")
    } else if (powerNum>=80 && gender==="male") {
        console.log ("Drone Bee")
    } else if (powerNum>=60 && powerNum<80) {
        console.log ("Guard Bee")
    } else {
        console.log ("Worker Bee")
    }

}
solve ("82", "81", "female")
