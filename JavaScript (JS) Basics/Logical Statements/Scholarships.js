function solve (income, gpa, minWage) {
    income=Number(income);
    gpa=Number(gpa);
    minWage=Number(minWage);
    let socialScholarship =Math.floor(0.35*minWage);
    let excellence = Math.floor(gpa*25);

    if (income<minWage && gpa>=4.50 && gpa<5.50) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`) 
    }
    else if (gpa>=5.50) {
       if (income>=minWage) {
            console.log (`You get a scholarship for excellent results ${excellence} BGN`)
        }
        else if (income<minWage) {
        if (excellence>=socialScholarship) {
            console.log (`You get a scholarship for excellent results ${excellence} BGN`)
        } else  {
            console.log(`You get a Social scholarship ${socialScholarship} BGN`)
        } 
    }
    } else  {
        console.log("You cannot get a scholarship!")
     } 
    }
    
solve ("200.00",
"6.00",
"300.00")
