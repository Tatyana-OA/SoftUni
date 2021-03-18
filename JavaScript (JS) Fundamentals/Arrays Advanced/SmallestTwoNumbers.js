function smallest (arr){
    let sortedAscending = arr.sort((function(a, b){return a-b}))
    
    console.log (sortedAscending.slice(0,2).join(" "))
}
smallest([30, 15, 50, 5])
