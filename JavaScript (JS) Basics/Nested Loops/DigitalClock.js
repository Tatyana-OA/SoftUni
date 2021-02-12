function digiclock() {
  let minutesEnd = 59;
  let hoursEnd = 23;


  for (
    let hours = 0;
    hours <= 23;
    hours++ 
  ) {
    for (
      let minutes = 0;
      minutes <= 59;
      minutes++ 
    ) 
    {
      let output = `${hours}:`; 

      if (hours < 10) {
        output = `0${hours}:`; 
      }

      if (minutes < 10) {
        output += `0${minutes}`;
      } else {
        
        output += `${minutes}`; 
      }

      console.log(output);
    }
  }
}
digiclock();
