//1
[1, 2, 3].filter(num => 'hi');
//returns [1, 2, 3] because the callback function return value is truthy

//2
[1, 2, 3].map(num => {
  num * num;
});
//returns [undefined, undefined, undefined] because the block scope doesn't return anything

//3
[1, 2, 3].map(num => num * num);
//returns a new array of [1, 4, 9] where each element is calculated from element * element

//4
['ant', 'bear', 'caterpillar'].pop().length;
//returns 11 because pop() returns the last element of the array and the length of the last element of the array is 11

//5
[1, 2, 3].every(num => {
  return num = num * 2;
});
//returns true because the callback returns true 

//6
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
//returns [1, 1, 1, 1, 1] because it changes the value of the array between 1 to 5 with 1
//it is also destructive

//7
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
//returns [ undefined, 'bear'] because the condition is false with the first element and it doesn't return anything
//if a function doesn't return anything, it will return undefined

//8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj = {};
for (let index = 0; index < flintstones.length; index += 1) {
  obj[flintstones[index]] = index;
}

console.log(obj);

//or

let flintstonesOjb = {};
flintstones.forEach((name, index) => {
  flintstonesOjb[name] = index;
})

console.log(flintstonesOjb);

//9
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let totalAges = Object.values(ages).reduce((acc, ele) => acc + ele, 0);
console.log(totalAges);

//10
let minAge = Math.min(...Object.values(ages));
console.log(minAge);

//11
let statement = "The Flintstones Rock";
let statementArray = statement.split(' ').join('').split('');
let statObj = {};

statementArray.forEach(element => {
   statObj[ele] = statementArray.filter(subelement => subelement === element ).length;
})

console.log(statObj);