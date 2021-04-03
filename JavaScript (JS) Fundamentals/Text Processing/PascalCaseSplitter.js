function solve(input) {
let newArr = [];
let word = []
newArr.push(input[0])
    for (let i =1; i<input.length; i++) {  
       let letter = input[i];
        
        if (letter==(letter.toUpperCase())) {
            word.push(newArr.join(""))
            newArr=[]
            
        }
        newArr.push(letter)
        if (i==input.length-1) {
            word.push(newArr.join(""))
        }
    }
console.log(word.join(", "))
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
