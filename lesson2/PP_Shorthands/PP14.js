// Invoke your sum function using both a list of 
// numbers and spread syntax from an array of numbers.

function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

let numsArr = [1, 2, 3];
console.log(sum(1, 2, 3));  // 6
console.log(sum(...numsArr));  // 6
