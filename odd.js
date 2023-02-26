const isOdd  = function (num) {
  return num % 2 != 0;
}

const tenIsEven = isOdd(10);
const elevenIsEven = isOdd(11);

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));