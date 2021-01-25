function solve(month, nights) {
  nights = Number(nights);
  let studioPrice = 0;
  let apartmentPrice = 0;
  let studioDiscount = 0;
  let apartmentDiscount = 0;
  let totalPriceStudio = 0;
  let totalPriceApartment = 0;
  switch (month) {
    case "May":
      studioPrice = 50.0;
      apartmentPrice = 65.0;
      break;
    case "October":
      studioPrice = 50.0;
      apartmentPrice = 65.0;
      break;
    case "June":
      studioPrice = 75.2;
      apartmentPrice = 68.7;
      break;
    case "September":
      studioPrice = 75.2;
      apartmentPrice = 68.7;
      break;
    case "August":
      studioPrice = 76.0;
      apartmentPrice = 77.0;
      break;
    case "July":
      studioPrice = 76.0;
      apartmentPrice = 77.0;
      break;
  }
  if (nights > 14) {
    apartmentDiscount = 0.1;
    apartmentPrice = 0.9 * apartmentPrice;
  }
  if ((nights > 7 && nights<=14 && month === "May") || month === "October") {
    studioDiscount = 0.05;
    studioPrice = 0.95 * studioPrice;
  } else if ((nights > 14 && month === "May") || month === "October") {
    studioDiscount = 0.3;
    studioPrice = 0.7 * studioPrice;
  } else if ((nights > 14 && month === "June") || month === "September") {
    studioDiscount = 0.2;
    studioPrice = 0.8 * studioPrice;
  } 
  totalPriceApartment = (apartmentPrice * nights).toFixed(2);
  totalPriceStudio = (studioPrice * nights).toFixed(2);

  console.log(`Apartment: ${totalPriceApartment} lv.`);
  console.log(`Studio: ${totalPriceStudio} lv.`);
}
solve("August",
"0")




