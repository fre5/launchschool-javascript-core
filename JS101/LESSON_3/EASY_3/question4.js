let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
** the output is
** [ { first: 42 }, { second: "value2" }, 3, 4, 5 ]
** because slice() only makes a shallow copy, each
** subelement of the array is still referenced from 
** the original array
*/