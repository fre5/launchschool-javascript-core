let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);

let newFlintstones = [];

//with forEach and push
flintstones.forEach((element) => {
  if(Array.isArray(element)) {
    element.forEach((subelement) => {
      newFlintstones.push(subelement);
    })
  } else {
    newFlintstones.push(element);
  }
});

console.log(newFlintstones);

//or 
//using concat
newFlintstones = [].concat(...flintstones);
console.log(newFlintstones);

//using reduce
newFlintstones = flintstones.reduce((accumulator,element) => {
  return accumulator.concat(element); 
}, []);

console.log(newFlintstones);

//using forEach 
flintstones.forEach((element) => {
  newFlintstones = newFlintstones.concat(element);
})

console.log(newFlintstones);