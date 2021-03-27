function solve(input) {
    let map = new Map();
    for (let line of input) {
      let tokens = line.split(` `);
      let name = tokens.shift();
      let grades = tokens.map(Number);
  
      if (!map.has(name)) {
        map.set(name, []);
      }
      let existing = map.get(name);
      for (let grade of grades) {
        existing.push(grade);
      }
    }
    let sorted = Array.from(map).sort(compareAverage);
    for (let key in sorted) {
      let line = sorted[key];
      console.log(`${line[0]}: ${line[1].join(`, `)}`);
    }
  
    function compareAverage([nameA,gradesA], [nameB,gradesB]) {
      let avgA = 0;
      gradesA.forEach((x) => (avgA += x));
      avgA /= gradesA.length;
  
      let avgB = 0;
      gradesB.forEach((x) => (avgB += x));
      avgB /= gradesB.length;
  
      return avgA - avgB;
    }
  }
