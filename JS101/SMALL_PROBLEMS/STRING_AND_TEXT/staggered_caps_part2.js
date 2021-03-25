function staggeredCase(string, alphabetOnly = false) {
  let caps = true;
  
  let array = string.split('');

  return array.map(element => {
    
    if (alphabetOnly && !checkAlphabet(element)) {
      return element;
    } else {
      if (caps) {
        caps = false;
        return element.toUpperCase();
      } else {
        caps = true;
        return element.toLowerCase();
      }    
    }
    
  });

}

function checkAlphabet(string) {
  return ((string >= 'a' && string <= 'z') || (string >= 'A' && string <= 'Z'));
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("ignore 77 the 4444 numbers"));