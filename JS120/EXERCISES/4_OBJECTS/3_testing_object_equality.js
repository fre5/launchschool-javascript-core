//Write a function that accepts two object arguments and returns true 
//or false depending on whether the objects have the same key/value pairs

function objectsEqual(objA, objB) {
  if (objA === objB) { 
    return true;
  }
  
  objAKeys = Object.keys(objA);
  objBKeys = Object.keys(objB);

  if (objAKeys.length !== objBKeys.length) {
    return false;
  }

  return objAKeys.every(key => {
    if (typeof objA[key] !== 'object') {
      return objBKeys.includes(key) && objA[key] === objB[key];
    } else { //Further exploration 
      return objBKeys.includes(key) && objectsEqual(objA[key], objB[key]);
    }
  });
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false 

//Further exploration test cases:
console.log(objectsEqual({a: { one: 1, two: 2}}, {a: { three: 3, four: 4}})); //false
console.log(objectsEqual({b: { one: 1, two: 2}}, {b: { one: 1, two: 2}})); //true
