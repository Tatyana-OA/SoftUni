function aggregation(arr) {
    let sumElts = 0;
    let inverseSum = 0;
    let concatRes = '';
    for (el of arr) {
        el = Number(el);
        sumElts+=el;
        inverseSum+=(1/el)
        concatRes+= el.toString();
    }
    console.log(sumElts)
    console.log(inverseSum);
    console.log(concatRes)

}
aggregation([1, 2, 3])
aggregation([2, 4, 8, 16])
