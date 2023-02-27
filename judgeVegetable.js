// Challenge
// Instruction
// Complete the logic in the function judgeVegetable.

// For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

// Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

// If we called the function with the following arguments.

// const vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]

// const metric = 'redness'

// judgeVegetable(vegetables, metric)
// The judgeVegetable function would return the string:

// "Old Man Franklin"

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let winner = "";
  let max = 0;
  for (let vegetable of vegetables){
    if (vegetable[metric] > max){
      winner = vegetable.submitter;
      max = vegetable[metric];
    } }
  return(winner);
}

