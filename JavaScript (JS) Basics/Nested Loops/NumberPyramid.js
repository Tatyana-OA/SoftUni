function solve(input) {
let num = Number(input[0]);
let counter = 1; // брояч
let flag=false; //флаг

for (let i=1; i<= num; i++) { //редове
    let output =""; // за приниране със спейс в реда
    for (let j=0; j<i; j++) { // колони
        output += counter + " "
        if (counter===num) {
            flag=true;
            break;   
        }
        counter ++
    }
    console.log (output)
    if (flag) {
        break;
    }
}

}
solve ((["10"]))
