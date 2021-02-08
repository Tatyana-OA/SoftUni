function solve(input) {
    let index = 2; 
    let width = Number(input[0]); 
    let length = Number(input[1]); 
    let height = Number(input[2]); 
    let boxes = input[index++]; 
    let allBoxes = 0; 
  
    let volume = width*length*height; 
  
    while (true) {
      //цикъл за четене от масива
      let currentBoxes = input[index];
      index++;
      if (currentBoxes === "Done") {
       
        break;
      }
      currentBoxes = Number(currentBoxes);
      allBoxes += currentBoxes;
      if (allBoxes >= volume) {
       
        break;
      }
    }
  
    let boxesLeft = volume - allBoxes;
  
    if (volume - allBoxes >= 0) {
   
      console.log(`${boxesLeft} Cubic meters left.`);
    } else {
      let boxesOver = allBoxes - volume; 
      console.log(`No more free space! You need ${boxesOver} Cubic meters more.`);
    }
  }
  solve(["10", "10", "2", "20", "20", "20", "20", "122"]);
