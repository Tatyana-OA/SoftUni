function solve(input){
let toArr = input.split("")
let trial = []


for (let i=0; i<toArr.length; i++){
 let letter = toArr[i]
    for (let j=i+1; j<=toArr.length; j++){
        let another = toArr[j]
        if (letter!=another){
            trial.push(letter)
            i=j-1
            if (j=toArr.length && letter==another){
                trial.push(another)
            }

            break;
            
        }
    }
}
console.log(trial.join(""))
}
