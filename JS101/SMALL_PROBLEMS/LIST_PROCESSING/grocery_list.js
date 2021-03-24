function buyFruit(array) {
  let result = [];

  array.forEach(element => {
    for (let index = 0; index < element[1]; index += 1) {
      result.push(element[0]);
    }
  })
  return result;
}




console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]




/*
buyFruit[0]     => ['apple', 3]
buyFruit[0][0]  => 'apple'
buyFruit[0][1]  => 3

buyFruit[1]     => ['orange', 1]
buyFruit[1][0]  => 'orange'
buyFruit[1][1]  => 1

*/