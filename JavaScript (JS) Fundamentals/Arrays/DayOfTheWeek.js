function solve(arr) {
    let days = [
      `Monday`,
      `Tuesday`,
      `Wednesday`,
      `Thursday`,
      `Friday`,
      `Saturday`,
      `Sunday`,
    ];
    if (arr <= 0 || arr >= 8) {
      console.log(`Invalid day!`);
    } else {
      console.log(days[arr - 1]);
    }
  }
  solve(3)
solve(6)
solve(11)
