function solve (input) {
    let n = Number(input[[0]]); 
    let counter1 = 0; 
    let counter2=0;
    let counter3 =0;
    let counter4=0;
    let counter5=0;
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;
    let result4 = 0;
    let result5 = 0;

    for (let i=1; i<input.length; i++) { 
    let numberRandom = Number(input[i]); 
    if (numberRandom<200) {
    counter1++

    } else if (numberRandom>=200 && numberRandom<=399) {
        counter2++

    } else if (numberRandom>=400 && numberRandom <=599) {
        counter3++

    }else if (numberRandom>=600 && numberRandom<=799) {
        counter4++

    }else if (numberRandom>=800) {
        counter5++

    }

    }
   
    result1=(counter1/n)*100;
    console.log (result1.toFixed(2) + "%")
    result2=(counter2/n)*100;
    console.log (result2.toFixed(2)+ "%")
    result3=(counter3/n)*100;
    console.log (result3.toFixed(2)+ "%")
    result4=(counter4/n)*100;
    console.log (result4.toFixed(2)+ "%")
    result5=(counter5/n)*100;
    console.log (result5.toFixed(2)+ "%")
}
solve (["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])

