//14 - return an array containing colors of the fruits and sizes of the vegetables
//     sizes should be uppercase and colors should be capitalized
obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let fruitVeg = [];

Object.values(obj).forEach(element => {
  if (element['type'] === 'fruit') {
    fruitVeg.push(element['colors'].map(color => color[0].toUpperCase() + color.slice(1)));
  } else if (element['type'] === 'vegetable') {
    fruitVeg.push(element['size'].toUpperCase());
  }
});

console.log(fruitVeg);