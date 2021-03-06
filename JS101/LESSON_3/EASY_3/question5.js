function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

const isColorValid2 = color => {
  return color === "blue" || color === "green";
} 

console.log(isColorValid2("blue"));

//using includes
const isColorValid3 = color => ["blue", "green"].includes(color);

console.log(isColorValid3("green"));
