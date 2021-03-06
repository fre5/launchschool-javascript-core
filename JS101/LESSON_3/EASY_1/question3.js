let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(Object.keys(ages));

function keySearch(object, string) {
  for (let index = 0; index < Object.keys(object).length; index += 1) {
    if (Object.keys(object)[index] === string) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(keySearch(ages, "Spot"));

//or use a built in method to search a property within an object

console.log(ages.hasOwnProperty("Spot"));
