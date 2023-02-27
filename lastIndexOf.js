// Challenge
// Instruction
// Define a function lastIndexOf.

// When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

// For example:

// code	output
// lastIndexOf([ 0, 1, 4, 1, 2 ], 1);	3
// lastIndexOf([ 0, 1, 4, 1, 2 ], 2);	4
// lastIndexOf([ 0, 1, 4, 1, 2 ], 3);	-1
// lastIndexOf([ 5, 5, 5 ], 5);	2
// lastIndexOf([], 3);	-1
// Warning
// JavaScript has a .indexOf function (which does something similar), but you may not use it in this exercise.

const lastIndexOf = function (arrayX, number) {
  if (arrayX.length === 0){
    return (-1);
  }

  for (let i = arrayX.length - 1; i >= 0; i--){
    if (arrayX[i] == number){
      return (i);
    } else if (i === 0 && arrayX[i] != number){
      return (-1);
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

console.log(lastIndexOf([5,5,5,5,0],5), "=?", 3);
console.log(lastIndexOf([0,0,0,0,0],1), "=?", -1);