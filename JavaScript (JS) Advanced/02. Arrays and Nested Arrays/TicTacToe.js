function solve(input) {
    let initialMatrix = [['false', 'false', 'false'],
    ['false', 'false', 'false'],
    ['false', 'false', 'false']]
    let playerO = [];
    let playerX =[];
    let playerCue = '';
    let row = 0;
    let index = 0;
    let flag = false;
    
    for (let i=0; i<input.length; i++) {
        if (i%2!=0) {
            playerO = input[i].split(" ").map(Number)
            row = playerO[0];
            index = playerO[1]
            playerCue='O';
        } else if (i%2==0) {
             playerX = input[i].split(" ").map(Number)
             playerCue='X';
             row = playerX[0];
            index = playerX[1]
        }
        for (let j=0; j<initialMatrix.length;j++) {
            let matrixRow = initialMatrix[j];
            if (j==row && matrixRow[index]=='false') {
                matrixRow[index]=playerCue
                break;
            } else if(j==row && matrixRow[index]!=='false') {
                return `This place is already taken. Please choose another!`
            }

        }
        if (initialMatrix[0][0]===initialMatrix[0][1]===initialMatrix[0][2] ||
            initialMatrix[1][0]===initialMatrix[1][1]===initialMatrix[1][2] ||
            initialMatrix[2][0]===initialMatrix[2][1]===initialMatrix[2][2] ||
            initialMatrix[0][0]===initialMatrix[1][0]===initialMatrix[2][0] ||
            initialMatrix[0][1]===initialMatrix[1][1]===initialMatrix[2][1] ||
            initialMatrix[0][2]===initialMatrix[1][2]===initialMatrix[2][2] || 
            initialMatrix[0][0]===initialMatrix[1][1]===initialMatrix[2][2] ||
            initialMatrix[0][2]===initialMatrix[1][1]===initialMatrix[0][0]) {
            flag = true
            break;
        }

    }
    if (flag) {
        return `Player ${playerCue} wins!`
    }

}
console.log(solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
))
console.log(solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
))
