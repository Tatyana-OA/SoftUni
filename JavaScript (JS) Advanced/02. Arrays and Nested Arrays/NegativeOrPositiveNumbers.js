function negPos (input){
    let result = [];

     for (element of input) {
        element < 0 ?  result.unshift(element) : result.push(element)
        
     }
     return result.join('\n');
  

}
console.log(negPos([7, -2, 8, 9]))
console.log(negPos([3, -2, 0, -1]))
