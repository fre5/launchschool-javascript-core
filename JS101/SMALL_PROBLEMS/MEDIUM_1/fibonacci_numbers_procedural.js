/*
function fibonacci(number) {
  let array = [];
  let counter = 0;
  let fibNum = 0;
  while (counter < number) {

    if (counter <= 1) {
      fibNum = 1;
      array.push(fibNum);
    } else {
      array.push(array[array.length - 1] + array[array.length - 2])
    }
    counter += 1;
  }
  return array[array.length - 1];

}
*/


function fibonacci(number) {
  let previousTwo = [1,1];

  for (let index = 3; index <= number; index += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]]
  }
  return previousTwo[1];
}







console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050