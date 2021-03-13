function solve (numOne, numTwo, numThree) {
 
    if (numOne>=0 && numTwo >=0 && numThree>=0) {
        console.log ("Positive")
    } else if (numOne<0 && numThree<0 && numThree<0){
        console.log ("Negative");
    }else if (numOne>0 && numTwo>0 && numThree<0) {
        console.log ("Negative");
    } else if (numOne>0 && numTwo<0 & numThree<0) {
        console.log ("Positive")
    }
    else if (numOne>0 && numTwo<0 && numThree>0) {
        console.log ("Negative")
    }
    // one - done; 
    else if (numOne<0 && numTwo>0 && numThree>0) {
        console.log ("Negative")
    } else if (numOne<0 && numTwo<0 && numThree>0){
        console.log ("Positive")
    }else if (numOne<0 && numTwo>0 && numThree<0) {
        console.log ("Positive")
    } 
    else if (numOne==0 || numTwo==0 || numThree==0) {
        console.log ("Positive")
    }
}
