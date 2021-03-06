let numbers = [1, 2, 3, 4];

//by assigning its length to 0
numbers.length = 0;

numbers = [1, 2, 3, 4];

//splicing all elements
numbers.splice(0,numbers.length);

numbers = [1, 2, 3, 4];

//looping through and pop() every elements
while (numbers.length) {
  numbers.pop();
}

console.log(numbers);