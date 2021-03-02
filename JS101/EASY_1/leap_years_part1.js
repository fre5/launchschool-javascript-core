let isLeapYear = year => {
  if(year % 4 === 0) {
    if(year % 100 === 0) {
      if(year % 400 === 0) {
        return true;
      } 
      return false;
    } 
    return true;
  } else {
    return false;
  }
}

//or

let isLeapYear = year => {
  if(year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));      
console.log(isLeapYear(2015));      
console.log(isLeapYear(2100));      
console.log(isLeapYear(2400));      
console.log(isLeapYear(240000));    
console.log(isLeapYear(240001));    
console.log(isLeapYear(2000));      
console.log(isLeapYear(1900));      
console.log(isLeapYear(1752));      
console.log(isLeapYear(1700));      
console.log(isLeapYear(1));         
console.log(isLeapYear(100));       
console.log(isLeapYear(400));    