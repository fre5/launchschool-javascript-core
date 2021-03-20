function retirement() {
  const rlSync = require('readline-sync');
  let age = rlSync.question('What is your age? ');
  let retire = rlSync.question('At what age would you like to retire? ');
  let year = new Date().getFullYear();
  console.log(`It's ${year}. You will retire in ${year + (retire - age)}.`);
  console.log(`You have only ${retire - age} years of work to go!`);
}

retirement();
