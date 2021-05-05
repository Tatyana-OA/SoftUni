function rectangle(width, height, color) {
  
    let firstLetter = color.slice(0,1).toUpperCase()
    color = firstLetter+color.slice(1)
    function calcArea() {
      return this.width * this.height;
    }
  
    return {
      width,
      height,
      color,
      calcArea,
    };
  }


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());



