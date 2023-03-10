// Challenge
// In this exercise, we will define 3 functions to calculate the areas of 3 different shapes:

// rectangles
// triangles
// circles
// Instruction
// Create the following 3 functions with the correct logic to calculate the area of that shape.

// calculateRectangleArea(length, width)
// calculateTriangleArea(base, height)
// calculateCircleArea(radius)
// The parameters to the functions will always be numbers.

// Each function should return a number that corresponds to the area of the shape. Here is the math for each of the shapes:

// rectangle: length × width
// triangle: base × height / 2
// circle: π × radius2
// If any of the parameters are negative, the function should return undefined.

// Tips
// To access the value of π in your JavaScript code, use Math.PI.
// You may paste the following code after your function definitions to help you verify they work correctly.



const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0){
    return (undefined)
  } else {
    return (length * width);
  }
}

const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0){
    return (undefined)
  } else {
    return (base * height / 2);
  }
}

const calculateCircleArea = function (radius) {
  if (radius < 0){
    return (undefined)
  } else {
    return (Math.PI * radius * radius);
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined