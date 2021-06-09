function add(a) {
    let sum = 0;
    sum += a
    
  function calc(b) {
      sum += b
      return calc
    
  }
  calc.toString = () => sum
  // Връща числен резултат, а не функция (преобразува return-а на функцията в числения му резулат)
  return calc
}
console.log(add(1)(2)(3));
