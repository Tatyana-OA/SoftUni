function solve(input){
let days = Number(input[0]);
let allFood = Number(input[1]);
index = 2;
let commandLine = Number(input[index++])
let biscuits=0;
let foodEaten = 0;
let foodPercent = 0;
let doggoAll =0;
let doggoPercent = 0;
let catoAll=0;
let catoPercent=0;

    for (let i=1; i<=days; ++i) {
        let dogEats = Number(commandLine)
        doggoAll+=dogEats
        commandLine=input[index++]
        let catEats = Number(commandLine)
        catoAll+=catEats;
        commandLine=input[index++]

        if (i%3==0) {
            biscuits+= Math.round(0.1* (catEats+dogEats))
        }
       
    }
    foodEaten= doggoAll+catoAll; //всичка изядена
    foodPercent= ((foodEaten/allFood) * 100).toFixed(2) // изядена храна
    doggoPercent = ((doggoAll/foodEaten)*100).toFixed(2)
    catoPercent = ((catoAll/foodEaten)*100).toFixed(2)

    console.log (`Total eaten biscuits: ${biscuits}gr.`)
    console.log (`${foodPercent}% of the food has been eaten.`)
    console.log (`${doggoPercent}% eaten from the dog.`)
    console.log (`${catoPercent}% eaten from the cat.`)



}

solve ([
    '3',   '1000',
    '300', '20',
    '100', '30',
    '110', '40'
  ])
