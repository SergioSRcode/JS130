// Write a function that takes a sorted Array of integers as an argument, and returns an array that includes all of the missing integers (in order) between the first and last elements of the argument.

/*
Rules: 
- find all missing (inbetween) numbers from the first to the last of array
- if no numbers are missing, return an empty array
- if there is only one number, return an emtpy array 

MM:
- create an array with all numbers from num1 to last num.
- filter out all numbers, that were included in the original arr.
- return arr

ALGO:
- create new array "inbetweens"
  - loop from num1 to last num 
    - pass all nums to inbetweens
- filter out all nums that were included in the orig. arr
  - run filter => current num is NOT included in orig arr.
  - return filtered arr.
*/

function missing(arr) {
  let inbetweens = [];

  for (let num = arr[0]; num < arr[arr.length - 1]; num++) {
    inbetweens.push(num);
  }

  return inbetweens.filter(num => !arr.includes(num));
}

let p = console.log;

p(missing([-3, -2, 1, 5]));   // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4]));     // []
p(missing([1, 5]));           // [2, 3, 4]
p(missing([6]));              // []