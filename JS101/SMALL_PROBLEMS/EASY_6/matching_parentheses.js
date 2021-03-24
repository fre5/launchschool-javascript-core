function isBalanced(string) {
  let parentheses = string.split('').filter(element => {
    return element === '(' || element === ')';
  }).join('');

  while(parentheses.includes('()')) {
    let pairindex = parentheses.indexOf('()');
    parentheses = parentheses.substring(0, pairindex) + parentheses.substring(pairindex + 2);
  }
  
  return parentheses.length === 0 ? true : false;
}
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);