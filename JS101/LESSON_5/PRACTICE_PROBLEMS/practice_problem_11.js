//11 - use map to return a new array with each number incremented by 1
arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let incrementObj = [];
arr.map(element => { 
  Object.keys(element).forEach(subelement => { 
    element[subelement] += 1;
  })
  incrementObj.push(element);
})

console.log(incrementObj);