//10 - same as problem 9 but in descending order
let newarrdescend = arr.map(element => {
  if (typeof element[0] === 'number') {
    return element.slice().sort((a, b) => b - a);
  } else {
    return element.slice().sort((a, b) => {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
  }
});

console.log(newarrdescend);