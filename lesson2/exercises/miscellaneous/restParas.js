"use strict";

// How can we refactor the function definition below (without changing the function invocation) 
// so that we don't need to use the arguments object?

// function sum() {
//   let values = Array.prototype.slice.call(arguments);

//   return values.reduce(function(a, b) {
//     return a + b;
//   });
// }

// sum(1, 4, 5, 6); // 16

function sum(...nums) {
  return nums.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16