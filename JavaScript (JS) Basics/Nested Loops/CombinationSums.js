function solve(input) {
  let beginningNum = Number(input[0]);
  let endNum = Number(input[1]);
  let magicNum = Number(input[2]);
  let combinationCount = 0;
  let combinationFound = false;

  for (let i = beginningNum; i <= endNum; i++) {
    for (let j = beginningNum; j <= endNum; j++) {
      combinationCount++;
      if (i + j === magicNum) {
        console.log(
          `Combination N:${combinationCount} (${i} + ${j} = ${magicNum})`
        );
        combinationFound = true; // булев флаг
        break;
      }
    }
    if ((combinationFound === true)) {
      break;
    }
  }
  if ((combinationFound === false)) {
    console.log(
      `${combinationCount} combinations - neither equals ${magicNum}`
    );
  }
}

solve(["88", "888", "2000"]);
