function solve (input) {
let cakeLength=Number(input[0]);
let cakeWidth= Number(input[1]);
let cakePieces = cakeLength*cakeWidth;
let index=2;
let command = input[index++]
let piecesNeeded=0;
let piecesEaten = 0;
let piecesLeft=0;

while (command!=="STOP") {
let piecesTakenAtATime= Number(command);
piecesEaten+=piecesTakenAtATime;
piecesLeft=cakePieces-piecesEaten;
command=input[index++]
    if (piecesLeft<=0) {
    piecesNeeded= piecesEaten-cakePieces;
    console.log (`No more cake left! You need ${piecesNeeded} pieces more.`)
    break;
    }
}

if (command==="STOP") {
    console.log (`${piecesLeft} pieces are left.`)
}


}

solve (["10",
"2",
"2",
"4",
"6",
"STOP"])
