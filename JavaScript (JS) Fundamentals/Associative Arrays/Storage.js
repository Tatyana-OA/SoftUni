function store(input){
   let assocArr = {};
   for (line of input){
       let [product, qty] = line.split(" ")
       qty=Number(qty)
       if (assocArr.hasOwnProperty(product)) {
           let existing = assocArr[product]
           existing+=qty
           assocArr[product]=existing
       } else {
        assocArr[product]=qty
       }
   }
   for (key in assocArr){
       console.log(`${key} -> ${assocArr[key]}`)
   }

}
