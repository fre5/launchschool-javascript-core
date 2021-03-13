//17 - write a function that generates a UUID

function uuid() {
  const HEX = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f'
  }
  let stringBuilder = '';

  while (stringBuilder.length < 32) {
    stringBuilder += HEX[Number(Math.floor(Math.random() * Object.keys(HEX).length))];
  }
  
  let finalString = stringBuilder.slice(0, 8) + '-' + 
                    stringBuilder.slice(8, 12) + '-' +
                    stringBuilder.slice(12, 16) + '-' +
                    stringBuilder.slice(16, 20) + '-' +
                    stringBuilder.slice(20, 32);
  
  return finalString;
  
}

console.log(uuid());
console.log(uuid());
console.log(uuid());