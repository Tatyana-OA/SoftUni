function squareStars(input) {
    let parameter = Number(input);
    if (input===undefined) {
        parameter = 5;
    }
    if (parameter==1) {
        console.log(`*`)
    } else  {
    for (i=1; i<=parameter; i++) {
        console.log('* '.repeat(parameter).trimEnd())
    }    
    }

}
// squareStars(1)
// squareStars(2)
// squareStars(5)
squareStars()
