function sortTwoCriteria(input) {
    return result = input
    .sort((a,b) => a.length-b.length || a.localeCompare(b))
    .join(`\n`)
}
console.log(sortTwoCriteria(['alpha', 
'beta', 
'gamma']
))
console.log(sortTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
))
console.log(sortTwoCriteria(['test', 
'Deny', 
'omen', 
'Default']
))
