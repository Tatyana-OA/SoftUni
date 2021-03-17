function lastKNums(n,k) {
    let myArr = [1];
  

    for (let i=1; i<n; i++) {
       let lastK= myArr.slice(-k) //  last k elements from back to front
       let sum = 0;
         for (j of lastK) {
             sum+=j
         }
         myArr.push(sum)
        

       }
       console.log (myArr.join(" "))
    }
