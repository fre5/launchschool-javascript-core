let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

//to determine whether a given string ends with an exclamation mark we can use the string length-1 as the index to point to the last character on the string

function mark(string) {
    if (string[string.length - 1] === '!') {
        return true;
    } else {
        return false;
    }
}

console.log(mark(str1));
console.log(mark(str2));

//or use endsWith(str) built in method

console.log(str1.endsWith("!"));
console.log(str2.endsWith("!"));


