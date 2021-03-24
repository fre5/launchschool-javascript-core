function repeater(string) {
  let result = [];
  string.split('').forEach(element => {
    if (element !== ' ')
    {
      result.push(element, element);
    } else {
      result.push(element);
    }   
  });
  
  return result.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

