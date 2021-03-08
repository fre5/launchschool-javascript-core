function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}


console.log(addToRollingBuffer1(["test1","test2","test3"], 3, "test4"));

console.log(addToRollingBuffer2(["test1","test2","test3"], 3, "test4"));


//example

//concat does not mutate the original array
let array = [];
array.concat("test1");
console.log(array);

//push mutates the original array
let array2 = [];
array2.push("test2");
console.log(array2);