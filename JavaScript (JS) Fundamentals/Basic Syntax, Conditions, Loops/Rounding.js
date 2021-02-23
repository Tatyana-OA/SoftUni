function solve(a, b) {
    a = parseFloat(a);
    if (b > 15) {
      b = 15;
    }
    let c = a.toFixed(b);
    console.log(parseFloat(c));
  }
