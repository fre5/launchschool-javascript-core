function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

console.log(factors(9));


//using a for loop that returns an empty string when input is 0 or a negative number
function newFactors(number) {
  let factors = [];
  for(let index = 0; index <= number; index += 1) {
    if (number % index === 0 ) {
      factors.push(index);
    }
  }
  return factors;
}

console.log(newFactors(9));

//using while that runs the loop only when the number is above 0, and also returns an empty string when input is 0 or negative. 
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(9));
