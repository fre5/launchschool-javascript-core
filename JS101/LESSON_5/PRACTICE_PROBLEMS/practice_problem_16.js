//16 - returns an object where the key is the first item in each subarray, and value is second
arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let newObj = {};

arr.forEach(element => {
  newObj[element[0]] = element[1];
})

console.log(newObj);