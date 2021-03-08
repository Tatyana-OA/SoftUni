function solve (arr1, arr2) {
let newArr= [];
let evenThing = 0;
let oddThing = '';

for (let i=0; i<=arr1.length-1; i++) {
    let arr1Element = arr1[i];
   let arr2element = arr2[i];
       
        if (i%2==0 || i==0) {
            evenThing = Number(arr1Element)+Number(arr2element);
            newArr.push(evenThing)
          
        } else if (i%2!=0) {
            oddThing=arr1Element+arr2element;
            newArr.push(oddThing)
          
        }
   
}
console.log (newArr.join(" - "))
}

solve (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)
