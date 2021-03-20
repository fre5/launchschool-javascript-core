function searching() {
  const rlSync = require('readline-sync');
  let array = [];
  array.push(rlSync.question('Enter the 1st number: '));
  array.push(rlSync.question('Enter the 2nd number: '));
  array.push(rlSync.question('Enter the 3rd number: '));
  array.push(rlSync.question('Enter the 4th number: '));
  array.push(rlSync.question('Enter the 5th number: '));
  let find = rlSync.question('Enter the last number: ');

  console.log(`\nThe number ${find} ${array.includes(find) ? 'appears' : 'does not appear'} in ${array}.`);  
}

searching();