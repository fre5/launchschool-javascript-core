/*
Given an integer n representing the amount of lights and the count of how many times a multiplication of number sequence that resulting in the lights toggle for each numbered lightswitch

Example : 
n = 5
count 1 -> all switched on
count 2 -> 2, 4 toggled, 2 and 4 are off , 1, 3, 5 are still on 
count 3 -> 3, toggled, 2, 3, 4 off, 1 and 5 are on
count 4 -> 4 toggled 1, 4, 5 are on, 2 and 3 off
count 5 -> 5 toggled 2, 3 and 5 are off , 1 and 3 are on

step 1 - > all on
step 2 - > 2, 4, 6 ,8 
step 3 - > 3, 6 ,9 , 12, 15
step 4 - > 4, 8, 12, 16, 20
step 5 - > 5, 10, 15, 20, 25

Data structure :
- Input : integer n
- Output : lights that are on

Algorithm :
- declare a variable object, initialize it to an empty object
- create a for loop that iterates an incremented number from 1 to n inclusive
  - add iterated element as a key to the object with the value of true
- create a for loop that iterates an incremented number from 2 to n inclusive of n
  - declare a variable num and initialize the value to current index
  - create a while loop that iterates as long as the num is smaller or equal than n 
    - re-assign the value of object with key num to its own inversed value
    - increment num by index
- declare a variable result, initialize it to the array of object keys with only the elements in
  which the value of its object element as the key is true
- re-assign result to its own value where its elements are converted to integers
- return result array

*/

function lightsOn(n) {
  let object = {};
  for (let index = 1; index <= n; index += 1) {
    object[index] = true;
  }
  for (let index = 2; index <= n; index += 1) {
    let num = index;
    while (num <= n) {
      object[num] = !object[num];
      num += index;
    } 
  }
  let result = Object.keys(object).filter(element => object[element] === true);
  result = result.map(element => parseInt(element));
  return result;
}

console.log(lightsOn(100));