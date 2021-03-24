rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray();                       // []


function rotateArray(array) {
  if (Array.isArray(array)) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (index === array.length - 1) {
      newArray.push(array[0]);
    } else { 
      newArray.push(array[index + 1]);
    }
  }
  console.log(newArray);
  } else {
  console.log(undefined);
  }
}