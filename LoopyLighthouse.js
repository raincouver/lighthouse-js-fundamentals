// Challenge
// We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

// If the number is a multiple of 3, print the string "Loopy" instead of the number.
// If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
// If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
// By print, we are referring to console.log.


const loopyLighthouse  = function (number) {
  // Your code in here ...
  if (number % 12 == 0) {
    return ("LoopyLighthouse");
  } else if (number % 4 == 0) {
    return ("Lighthouse");
  } else if (number % 3 == 0) {
    return ("Loopy");
  } else {
    return (number);
  } }

  for (let number = 100; number <= 200; number++) {
    console.log(loopyLighthouse(number));
  }
  // console.log(loopyLighthouse(number));
