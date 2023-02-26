const raining = true;
const cold = false;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");


if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}



const temperature = -1;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}



// The logic should help learners decide which school they should attend. Replace the comment inside the function with your code.

// The function returns one of the following strings, based on the value of age:

// Elementary School if age is below 13
// Secondary School if age is between 13 and 18 (both inclusive)
// Lighthouse Labs in all other cases.

const whichSchool  = function (age) {
  // Your code in here ...
  if (age < 13) {
    return ("Elementary School");
  } else if (age <= 18) {
    return ("Secondary School");
  } else {
    return ("Lighthouse Labs");
  } }


console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));



// For ages 13 to 18 returns Secondary School
// for (i = 13; i < 18; i++) {
//   expect(whichSchool(i)).to.be.equal("Secondary School");
// }
// For ages 19 to let's say 100 returns Lighthouse Labs
// for (i = 19; i < 100; i++) {
//   expect(whichSchool(i)).to.be.equal("Lighthouse Labs");
// }
// For ages 1 to 12 returns Elementary School
// for (i = 1; i < 12; i++) {
//   expect(whichSchool(i)).to.be.equal("Elementary School");
// }