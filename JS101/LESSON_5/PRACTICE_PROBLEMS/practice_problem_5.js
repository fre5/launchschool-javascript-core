//5 - compute and display the total age of male family members
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let total = Object.values(munsters)
      .filter(element => element['gender'] === 'male')
      .reduce((accumulator, subelement) => accumulator + subelement['age'], 0);

console.log(total);