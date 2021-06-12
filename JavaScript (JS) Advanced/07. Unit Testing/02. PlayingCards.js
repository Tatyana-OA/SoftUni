function play(face,suit) {
    let validCardFaces = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']
    let validSuits = {
        'S':'\u2660' ,
        'H':'\u2665',
        'D':'\u2666',
        'C':'\u2663'
    }
    if (validCardFaces.includes(face)&&Object.keys(validSuits).includes(suit)) {
        console.log(`${face}${validSuits[suit]}`)
    } else {
        throw new Error (`Error`)
    }
    return {
        face,
        suit,
        toString() {
           return `${face}${validSuits[suit]}`
            
        } 
    }

}
console.log(play('A', 'S'))
console.log(play('10', 'H'))
console.log(play('1', 'C'))
