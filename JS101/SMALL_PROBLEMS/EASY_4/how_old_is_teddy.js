function age(min, max) {
  let age = Math.floor(Math.random() * (max - min + 1)) + 20;
  console.log(`Teddy is ${age} years old`);
}

age(20, 120);