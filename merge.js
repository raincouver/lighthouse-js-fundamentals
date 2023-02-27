const merge = function (arrayA, arrayB){
  let arrayC = [];
  for (let i = 0; i < arrayA.length; i++) {
    arrayC.push(arrayA[i]);
  }
  for (let j = 0; j < arrayB.length; j++) {
    arrayC.push(arrayB[j]);
  }
  for (let x = 0; x < arrayC.length - 1; x++){
    for (let y = x + 1; y < arrayC.length; y++){
      if (arrayC[y] < arrayC[x]){
        const temp = arrayC[y];
        arrayC[y] = arrayC[x];
        arrayC[x] = temp;
      }
    }
  }
  return(arrayC);
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

