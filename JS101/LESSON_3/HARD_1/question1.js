function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

//both will not have the same results because on line 8, the return gets an automatic semi colon which disconnects the object after it.