function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));


function swapLongName(name) {
  let array = name.split(' ');
  let lastName = array.pop();
  let firstName = array.join(' ');

  return `${lastName}, ${firstName}`;
}

console.log(swapLongName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"