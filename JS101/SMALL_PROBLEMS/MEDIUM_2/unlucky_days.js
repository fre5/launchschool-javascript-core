function fridayThe13ths(year) {

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let daysNumber = 0;

  for (let index = 0; index < 13; index += 1) {
    let day = new Date(`${MONTHS[index]} 13, ${year}`).getDay();
    daysNumber += day === DAYS.indexOf('Friday') ? 1 : 0;
  }

  return daysNumber;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2