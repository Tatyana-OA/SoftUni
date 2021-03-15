function passwordValidator(password) {
    let passLength = password.length;
    let isLettersAndNum = /^[0-9a-zA-Z]+$/.test(password);
    let numberCount = 0;
    let checkOne = true;
    let checkTwo = true;
    let checkThree = true;
  
    if (passLength < 6 || passLength > 10) {
      console.log(`Password must be between 6 and 10 characters`);
      checkOne = false;
    }
    if (isLettersAndNum === false) {
      console.log(`Password must consist only of letters and digits`);
      checkTwo = false;
    }
    for (let i = 0; i < password.length; i++) {
      let numChar = Number(password.charAt(i));
      let checker = Number.isInteger(numChar);
      if (checker) {
        numberCount += 1;
      }
    }
    if (numberCount < 2) {
      console.log(`Password must have at least 2 digits`);
      checkThree = false;
    } 
    if(checkOne && checkTwo && checkThree){
      console.log(`Password is valid`);
    }
  }
