function guess (inputPassword){
    let correctPassword = "s3cr3t!P@ssw0rd";
    if (inputPassword===correctPassword) {
        console.log ("Welcome")
    }
    else {
        console.log ("Wrong password!")
    }
}
guess("s3cr3t!P@ssw0rd")
