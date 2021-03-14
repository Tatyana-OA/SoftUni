function chars(charOne, charTwo){
    result = '';
    let firstValue = charOne.charCodeAt(); // char to Ascii
    let secondValue = charTwo.charCodeAt();
    let toAsci = 0;
    if (firstValue<secondValue) {
        for (let i=firstValue + 1; i<secondValue; i++) 
        result += (toAsci =  String.fromCharCode(i)) + " ";
       
    } else {
        for (let i=secondValue+1; i<=firstValue-1; i++) {
            result += (toAsci =  String.fromCharCode(i)) + " ";
            
        }
    }
    console.log (result) // Ascii to char
}

// chars('a', 'd')
// chars('#',
// ':'
// )
chars('C',
'#'
)
