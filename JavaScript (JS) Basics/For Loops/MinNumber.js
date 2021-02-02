function solve (input) {
    let n= Number(input[0]);
    let resultNumber=1000000000000000000000; 


    for (let i=1; i <input.length; i++){
        let numberRandom = Number(input[i]);

        if (numberRandom<resultNumber) { 
            resultNumber=numberRandom;
        }

    }
    console.log (resultNumber)
}
solve (["4",
"45",
"-20",
"7",
"99"])
