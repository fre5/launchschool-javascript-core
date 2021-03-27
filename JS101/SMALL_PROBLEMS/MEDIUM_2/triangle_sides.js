function triangle(side1, side2, side3) {
  let obj = {};
  let array = [side1, side2, side3];
  array.sort((a, b) => a - b);

  isValid(array);
  
  array.forEach(element => {
    obj[element] = obj[element] + 1 || 1;
  });

  let triangle = '';


  if (Object.keys(obj).length === 3) {
    return 'scalene';
  }

  Object.keys(obj).forEach(element => {
    if (obj[element] === 3) {
      triangle = 'equilateral';
      return;
    } else if (obj[element] === 2) {
      if ((obj[element] * 2) >= array[2]) {
        triangle = 'isosceles';
        return;
      } else {
        triangle = 'invalid';
        return;
      }
    } 
  });

  return triangle;
}

function isValid(array) {
  if (((array[0] + array[1]) < array[2]) || (array.includes(0))) {
    return 'invalid';
  } else if ((array[0] + array[1]) < array[2]) {
    return 'invalid';
  }
}



console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"



/*

[3, 3, 3]
[3, 3, 1.5]
[3, 4, 5]
[0, 3, 3]



*/