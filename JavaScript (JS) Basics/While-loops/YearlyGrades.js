function solve(input) {
let index = 0; 
let name = input[index++]; 
let yearsFailed =0; 
let year = 1; 
let total = 0; 
let yearlyGrade = Number(input[index++]) 
while (year <= 12) {

    if (yearlyGrade <4) { 
        yearsFailed++
            if (yearsFailed ===2) { 
                break;
            }
    } else { 
        total += yearlyGrade 
        year++ 
    }
    yearlyGrade=Number(input[index++]) 
}
if (yearsFailed<2) { 
    let averGrade = (total/12).toFixed(2) 
    console.log (`${name} graduated. Average grade: ${averGrade}`)

} else {
    console.log (`${name} has been excluded at ${year} grade`)
}

}






solve (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
