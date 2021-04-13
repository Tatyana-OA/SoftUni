function fancy(input){
    let barcodeCount = Number(input.shift());
    let myRegExp = /@(#+)([A-Z]([a-zA-Z\d]{4,}[A-Z]))@(#+)/g;
    let digitRegExp = /\d/g;
    for (let i=0; i<barcodeCount; i++) {
        let line = input[i]
        if (line.match(myRegExp)) {
            let concatenatedDigits = line.match(digitRegExp);
            if (concatenatedDigits!=null) {
                console.log(`Product group: ${concatenatedDigits.join("")}`)
            } else {
                console.log(`Product group: 00`)
            }
        } else {
            console.log (`Invalid barcode`)
        }
    }
}
// fancy([6,
//     '@###Val1d1teM@###',
//     '@#ValidIteM@#',
//     '##InvaliDiteM##',
//     '@InvalidIteM@',
//     '@#Invalid_IteM@#',
//     '@#ValiditeM@#'])
fancy([3,'@#FreshFisH@#','@###Brea0D@###','@##Che4s6E@##'])
