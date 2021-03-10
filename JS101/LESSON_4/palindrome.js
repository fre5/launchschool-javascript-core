//palindrome
function changeMe(string) {
  let array = string.split(" ");
  let newArray = [];
  array.forEach(element => {
    element.split('').reverse().join('') === element ? newArray.push(element.toUpperCase()) : newArray.push(element);
  });
  return(newArray.join(' '));
}
console.log(changeMe("I LOVE my mom and dad equally"));