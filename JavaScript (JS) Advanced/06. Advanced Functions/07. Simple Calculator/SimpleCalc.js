function solution () {
    // initializing them here allows for usage of closure in the returned object
    let firstValue;
    let secondValue;
    let resultValue;
 //return object with metods, a.k.a functions inside
    return {
        // the selectors are already defined outside this JS code, we just use them
        init(selector1,selector2,resultSelector) {
           firstValue = document.querySelector(selector1)
           secondValue=document.querySelector(selector2)
           resultValue=document.querySelector(resultSelector)
    
        },
        add() {
            resultValue.value = Number(firstValue.value) + Number(secondValue.value)
        },
        subtract() {
            resultValue.value = Number(firstValue.value) - Number(secondValue.value)
        }
    }
}
