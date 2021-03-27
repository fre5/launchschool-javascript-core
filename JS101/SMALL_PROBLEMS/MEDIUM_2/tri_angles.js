function triangle(deg1, deg2, deg3) {
  const TRIANGLE_ARRAY = [deg1, deg2, deg3];
  return isValid(TRIANGLE_ARRAY) || getType(TRIANGLE_ARRAY);
}

function getType(TRIANGLE_ARRAY) {
  if (TRIANGLE_ARRAY.some(angle => angle > 90)) return 'obtuse';
  else if (TRIANGLE_ARRAY.every(angle => angle < 90)) return 'acute';
  else if (TRIANGLE_ARRAY.some(angle => angle === 90)) return 'right';
}

function isValid(TRIANGLE_ARRAY) {
  let sum = TRIANGLE_ARRAY.reduce((accumulator, element) => accumulator + element, 0);
  let zero = TRIANGLE_ARRAY.some(element => element === 0); 
  if ((sum !== 180) || zero) {
    return 'invalid';
  } 
  return;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"