function solve (number) {
    let numberGiven = Number(number);
    let divisibleBy2 = false;
    let divisibleBy3= false;
    let divisibleBy6 = false;
    let divisibleBy7 = false;
    let divisibleBy10 = false;
    if (numberGiven%2==0 ) {
        divisibleBy2 = true;
    } if (numberGiven%3==0 ) {
        divisibleBy3=true; 
    } if (numberGiven%6==0 ){
        divisibleBy6=true;   
    }  if (numberGiven%7==0){
        divisibleBy7=true;
    } if (numberGiven%10==0){
        divisibleBy10=true;
    }

    if (divisibleBy2&&divisibleBy3 && divisibleBy10) {
        console.log ("The number is divisible by 10")
    } else if  (divisibleBy2&&divisibleBy3){
        console.log ("The number is divisible by 6")
    }
    else if (divisibleBy2 && divisibleBy10) {
        console.log ("The number is divisible by 10")
    } else if (divisibleBy2 && divisibleBy3==false && divisibleBy6==false && divisibleBy7==false && divisibleBy10==false) {
        console.log ("The number is divisible by 2")
    } else if (divisibleBy3 && divisibleBy6==false && divisibleBy10==false && divisibleBy7==false) {
        console.log("The number is divisible by 3")
    }
    else if (divisibleBy7) {
        console.log("The number is divisible by 7")
    }
     else {
         console.log ("Not divisible")
     }
} solve (21)
