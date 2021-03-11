let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let newObj = {};
  for (let index = 0; index < produceKeys.length; index += 1) {
    if (produceList[produceKeys[index]] === 'Fruit') {
      newObj[produceKeys[index]] = 'Fruit';
    }
  }
  return newObj;
}

console.log(selectFruit(produce));
console.log(produce);