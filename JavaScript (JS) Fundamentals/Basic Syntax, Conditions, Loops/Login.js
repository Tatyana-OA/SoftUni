function solve (input) {

    let userName = input[0];
    let splitUserName = userName.split("");
    let reverseUserName = splitUserName.reverse();
    let joinArray = reverseUserName.join("");
    let correctPassword = joinArray;



    for (let i=1; i<input.length; i++) {
        let conseqTry = input[i]
        if (conseqTry!==correctPassword && i<4)
        {
            console.log (`Incorrect password. Try again.`)
        } else if (conseqTry!==correctPassword && i>=4) {
            console.log (`User ${userName} blocked.`)
        }
        if (conseqTry===correctPassword) {
            console.log (`User ${userName} logged in.`)
        }
 
    }

}
solve(['momo','omom'])
