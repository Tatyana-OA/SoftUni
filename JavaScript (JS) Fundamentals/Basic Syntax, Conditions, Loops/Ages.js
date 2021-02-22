function solve (age) {
    let personAge = Number(age);

    if (personAge>= 0 && personAge<=2) {
        console.log ("baby")
    } else if (personAge>=3 && personAge<=13){
        console.log ("child")
    }else if (personAge>=14 && personAge<=19){
        console.log ("teenager")
    }else if (personAge>=20 && personAge<=65){
        console.log ("adult")
    }else if (personAge>=66){
        console.log ("elder")
    }else {
        console.log ("out of bounds")
    }
}
solve (5)
