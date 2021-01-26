function solve(examHour, examMinutes, arrivalHour, arrivalMinutes) {
  examHour = Number(examHour);
  examMinutes = Number(examMinutes);
  arrivalHour = Number(arrivalHour);
  arrivalMinutes = Number(arrivalMinutes);

  let examHourstoMinutes = examHour * 60 + examMinutes;
  let arrivalHourstoMinutes = arrivalHour * 60 + arrivalMinutes;
  let timeToBeEarly = examHourstoMinutes - 30;
  let result = 0;
  let minutePart = 0;

  if (examHourstoMinutes-arrivalHourstoMinutes>=0 && examHourstoMinutes-arrivalHourstoMinutes<=30) {
    console.log("On time");
  } else if (arrivalHourstoMinutes < timeToBeEarly) {
    console.log("Early");
  } else if (arrivalHourstoMinutes > examHourstoMinutes) {
    console.log("Late");
  }

  if (
    examHourstoMinutes - arrivalHourstoMinutes < 60 &&
    examHourstoMinutes - arrivalHourstoMinutes != 0 &&
    examHourstoMinutes - arrivalHourstoMinutes > 0
  ) {
    result = examHourstoMinutes - arrivalHourstoMinutes;
    console.log(`${result} minutes before the start`);
  } else if (examHourstoMinutes - arrivalHourstoMinutes >= 60) {
    result = Math.floor((examHourstoMinutes - arrivalHourstoMinutes) / 60);
    minutePart = (examHourstoMinutes - arrivalHourstoMinutes) % 60;
    if (minutePart < 10) {
      console.log(`${result}:0${minutePart} hours before the start`);
    } else if (minutePart >= 10) {
      console.log(`${result}:${minutePart} hours before the start`);
    }
  } else if (
    arrivalHourstoMinutes - examHourstoMinutes < 60 &&
    arrivalHourstoMinutes - examHourstoMinutes != 0 &&
    arrivalHourstoMinutes - examHourstoMinutes > 0
  ) {
    result = arrivalHourstoMinutes - examHourstoMinutes;
    console.log(`${result} minutes after the start`);
  } else if (arrivalHourstoMinutes - examHourstoMinutes >= 60) {
    result = Math.floor((arrivalHourstoMinutes - examHourstoMinutes) / 60);
    minutePart = (arrivalHourstoMinutes - examHourstoMinutes) % 60;
    if (minutePart < 10) {
      console.log(`${result}:0${minutePart} hours after the start`);
    } else if (minutePart >= 10) {
      console.log(`${result}:${minutePart} hours after the start`);
    }
  }
}
solve("14",
    "00",
    "13",
    "55")





