let nanArray = [NaN];

console.log(nanArray[0] === NaN)

/*the output is false because NaN === NaN 
**is false to find out if something is NaN use
**isNaN()
*/

console.log(Number.isNaN(nanArray[0]));

console.log('________________');
console.log(isNaN(undefined));
console.log(Number.isNaN(undefined));

console.log(isNaN(null));
console.log(Number.isNaN(null));

