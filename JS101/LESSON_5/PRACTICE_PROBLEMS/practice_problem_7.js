//7 - what is the final value of a and b without running the code
let a = 2;
let b = [5, 8];
arr = [a, b]; //[2, [5, 8]]

arr[0] += 2;      //[4, [5, 8]]
arr[1][0] -= a;   //[4, [3, 8]]
//final values of a = 2 and b = [3, 8]