function swapCase(string) {
  return string.split('').map(element => {
    if (element === element.toUpperCase()) { 
      return element.toLowerCase();
    } else if (element === element.toLowerCase()) { 
      return element.toUpperCase();
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
