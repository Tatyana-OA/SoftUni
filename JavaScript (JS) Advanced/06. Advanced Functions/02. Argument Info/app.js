function solve (...args) {
    let typeofArg;
    let obj = {}
    let tallyObj = {}
    let resultArr = []
    for (let arg of args) {
        typeofArg = typeof(arg)
        obj[typeofArg] = arg
        resultArr.push(obj)
        obj = {}
        if (tallyObj[typeofArg]==undefined) {
            tallyObj[typeofArg] = 1
        } else {
            tallyObj[typeofArg]++
        }
    }

    for (let param of resultArr) {
        for (key in param) {
            console.log(`${key}: ${param[key]}`)
        }
    }
    let sorted = Object.entries(tallyObj).sort((a,b) => b[1]-a[1])
    for (let element of sorted) {
        console.log(`${element[0]} = ${element[1]}`)
    }

}

console.log(solve('cat', 42, function () { console.log('Hello world!'); }))
// solve({ name: 'bob'}, 3.333, 9.999)
