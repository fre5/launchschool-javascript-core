console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

function timeOfDay(number) {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  
  let hour = Math.floor(number / MINUTES_PER_HOUR) % HOURS_PER_DAY;
  let hourAdj = number > 0 ? hour : (hour + HOURS_PER_DAY) % HOURS_PER_DAY;
  let hourString = hourAdj.toString().length < 2 ? '0' + hourAdj : hourAdj;

  let minutes = number % MINUTES_PER_HOUR;
  let minutesAdj = number > 0 ? minutes : (MINUTES_PER_HOUR + minutes) % MINUTES_PER_HOUR;
  let minutesString = minutesAdj.toString().length < 2 ? '0' + minutesAdj : minutesAdj;

  return hourString + ':' + minutesString;
}