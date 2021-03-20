function sortTwoCriteria(array) {

let lengthWise =array.sort((x,y) => x.localeCompare(y))
let final = lengthWise.sort((a,b) => a.length - b.length )


console.log (final.join("\n"))

}
sortTwoCriteria(["test",
"Deny",
"omen",
"Default"])
