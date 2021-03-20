console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"

/*
90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
*/

function getGrade(grade1, grade2, grade3) {
  let mean = Math.floor((grade1 + grade2 + grade3) / 3);
  if (mean >= 90) return 'A';
  else if (90 > mean && mean >= 80) return 'B';
  else if (80 > mean && mean >= 70) return 'C';
  else if (70 > mean && mean >= 60) return 'D';
  else if (60 > mean && mean >= 0) return 'F';
}