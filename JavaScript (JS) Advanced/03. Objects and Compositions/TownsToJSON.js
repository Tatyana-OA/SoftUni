function townsToJSON(input) {
let result = []
let correctedInput = []
input.shift()
for (line of input) {
    line = line.split(" | ")
    for (item of line) {
        item = item.replace("|","").trim()
        correctedInput.push(item)
    }
    result.push({
        Town: correctedInput[0],
        Latitude: Number(Number(correctedInput[1]).toFixed(2)),
        Longitude:Number( Number(correctedInput[2]).toFixed(2))
    })
    correctedInput = []
    }
   
   return JSON.stringify(result)
}




console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
))
