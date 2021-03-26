/*
function fibonacci(number) {
  let previousTwo = [1,1];

  for (let index = 3; index <= number; index += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]]
  }
  return previousTwo[1];
}

*/

let obj = {};

function fibonacci(number) {
  if (number <= 2) {
    return 1;
  } else if (obj[number]) {
    console.log(obj);
    return obj[number];
  } else {
    obj[number] = fibonacci(number - 1) + fibonacci(number - 2);
    return obj[number];
  }


}




console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
//console.log(fibonacci(75));       // 2111485077978050