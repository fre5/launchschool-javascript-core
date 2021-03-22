union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

function union(array1, array2) {
  let flatArrays = [array1, array2].flat();
  let newArray = [];
  flatArrays.forEach(number => {
    !newArray.includes(number) ? newArray.push(number) : '';
  })
  console.log(newArray);
}