function solve (input) {
let n= Number(input[0]); // нулева позиция от Input е броят числа (n)
let counter1=0;
let counter2=0;
let counter3=0;
let result1=0;
let result2=0;
let result3=0;

for (let i=1; i<input.length; i++) // от 1 позиция (0 е заета), до -1 от дължината (защото почваме от 0), да се увеличава (обхожда) с 1;
{
    let randomNumber = Number(input[i]); //дефинираме числена стойност за всеки следващ index

    if (randomNumber%2==0) { // не продължаваме с else if, защото търсят от всички цисла кои се делят (т.е. не е exclusive процентно разпределение)
        counter1++
    } if (randomNumber%3==0) {
        counter2++
    } if (randomNumber%4==0) {
        counter3++
    }
}
result1=(counter1/n)*100;
result2=(counter2/n)*100;
result3=(counter3/n)*100;
console.log (result1.toFixed(2) + "%")
console.log (result2.toFixed(2) + "%")
console.log (result3.toFixed(2) + "%")

}

solve(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
