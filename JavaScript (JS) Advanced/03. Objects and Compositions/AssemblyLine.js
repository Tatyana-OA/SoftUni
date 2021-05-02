function solve(input) {
    const { model, power, carriage, color, wheelsize } = input;
  
    function getEngine(power) {
      const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
      ].sort((a, b) => a.power - b.power);
  
      // let result;
      // for (let i = 0; i < engines.length; i++){
      //     if(engines[i]).power >= power){
      //         result = engines[i];
      //         break;
      //     }
      // }
      return engines.find((el) => el.power >= power);
    }
    function getCarriage(carriage, color) {
      return {
        type: carriage,
        color: color,
      };
    }
  
    function getWheels(wheelsize) {
      let wheel =
        Math.floor(wheelsize) % 2 === 0
          ? Math.floor(wheelsize) - 1
          : Math.floor(wheelsize);
  
      return Array(4).fill(wheel, 0, 4);
    }
    return {
      model,
      engine: getEngine(power),
      carriage: getCarriage(carriage, color),
      wheels: getWheels(wheelsize),
    };
  }
