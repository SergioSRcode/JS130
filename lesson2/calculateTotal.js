/*
Write a program that uses two functions, add and subtract,
to manipulate a running total. When you invoke either function with a number,
it should add or subtract that number from the running total and log the new total to the console.

It should work like this:
*/
let runningTotal = 0;

function calculateTotal(operator) {
  if (operator === "+") {
    return (num) => runningTotal += num;
  } else if (operator === "-") {
    return (num) => runningTotal -= num;
  }
}

let add = calculateTotal("+");
let subtract = calculateTotal("-");

console.log(add(1));       // 1
console.log(add(42));      // 43
console.log(subtract(39)); // 4
console.log(add(6));       // 10