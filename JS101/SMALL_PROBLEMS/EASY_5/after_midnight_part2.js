const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(time) {
  let hour = Number(time.slice(0, 2));
  let hourInMinutes = (hour % HOURS_PER_DAY) * 60;
  let minutes = Number(time.slice(3, 6));
  let totalMinutes = hourInMinutes + minutes;
  return totalMinutes;
}

function beforeMidnight(time) {
  let hour = Number(time.slice(0, 2));
  let hourInMinutes = (hour % HOURS_PER_DAY) * 60;
  let minutes = Number(time.slice(3, 6)) * -1;
  let totalMinutes = (MINUTES_PER_DAY + (hourInMinutes + minutes)) % MINUTES_PER_DAY;
  return totalMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);