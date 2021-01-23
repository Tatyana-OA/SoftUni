function solve(day) {
  let price = 0;

  switch (day) {
    case "Monday":
      price = 12;
      case "Friday":
        price = 12;
    case "Tuesday":
      price = 12;
      break;
    case "Wednesday":
      price = 14;
    case "Thursday":
      price = 14;
      break;
    case "Saturday":
      price = 16;
    case "Sunday":
      price = 16;
      break;
  }
  console.log (price)
}
solve ("Friday")
