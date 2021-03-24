function reverse(list) {
  /*
  let newlist = [];
  list.forEach((element, index) => {
    newlist.push(list[(list.length - 1) - index]);
  });
  list.length = 0;
  newlist.forEach(element => {
    list.push(element);
  })
  return list;
  */

  let newlist = list.map((element, index) => {
    return list[(list.length - 1) - index]
  });
  list.length = 0;
  newlist.forEach(element => {
    list.push(element);
  })
  return list;
}

let list = [1, 2, 3, 4, 5]
let result = reverse(list);
console.log(result); 
console.log(list === result); // logs true