function createFormatter (separator, symbol, symbolFirst, formatter) {
//createFormatter receives any formatter function as the one in INPUT bellow
// it should return a partially applied function (annonymous one below)
//it is partially applied to the above function in that the separator, symbol and symbolFirst are fixed
// only viable parameter is the VALUE (any solution executed will only take a value - see input bellow)
    return function (value) {
        // the partially applied function returns the formatter function (input one)
        // in a way so that separator, symbol & symbolfirst are fixed, only value changes

        return formatter(separator,symbol,symbolFirst,value)
        //each time this return takes place, the formatter function below (input) is called with only one parameter - VALUE

    }

}

// INPUT Function 
function PeshoFormatera(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}


let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
