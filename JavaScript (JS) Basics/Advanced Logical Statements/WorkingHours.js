function solve(hour, day) {
  hour = Number(hour);
  let hourValid = hour >= 10 && hour <= 18;

  if (hourValid) {
    switch (day) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
      case "Saturday":
        console.log("open");
        break;
      case "Sunday":
        console.log("closed");
        break;
    }
  } else {
    console.log("closed");
  }
}

solve("11", "Sunday");
