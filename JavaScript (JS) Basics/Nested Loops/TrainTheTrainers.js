function solve(input){
    let n=Number(input[0])
    let index= 1;
    let name = input[index]
    let totalAvg = 0; 
    let countOfProblems = 0; 

    while (name!="Finish") { 
        countOfProblems++ ;
        let avgGrade = 0;
        for (let i=0; i <n; i++) { 
            let grade = Number(input[++index]) 
            avgGrade += grade 
            
        }
        avgGrade /=n 
        totalAvg += avgGrade;
        console.log(`${name} - ${avgGrade.toFixed(2)}.`);

        name = input[++index] 
    }
    let finalGrade = totalAvg/countOfProblems;
    console.log (`Student's final assessment is ${finalGrade.toFixed(2)}`)
}
solve (["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])
