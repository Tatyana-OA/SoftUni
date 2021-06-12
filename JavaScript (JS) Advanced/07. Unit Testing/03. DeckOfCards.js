function printDeckOfCards(cards) {
    let result = []
    let invalidCard = []
    let invalid = false;
    for (let card of cards) {
        let face = card.slice(0,card.length-1)
        let suit = card[card.length-1]
        function createCard() {
            let validCardFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
            let validSuits = {
                'S':'\u2660' ,
                'H':'\u2665',
                'D':'\u2666',
                'C':'\u2663'
            }
            if (validCardFaces.includes(face)&&Object.keys(validSuits).includes(suit)) {
                result.push(`${face}${validSuits[suit]}`)
            } else {
                invalid = true
                invalidCard.push(`${face}${suit}`)
                
            }
        }
        createCard()
        
    }
    if (invalid) {
        console.log(`Invalid card: ${invalidCard.join(" ")}`)
    } else {
        console.log(result.join(" "))
    }
    
      // TODO
  }

 // printDeckOfCards(['AS', '10D', 'KH', '2C'])
  printDeckOfCards(['5S', '3D', 'QD', '1C'])  
