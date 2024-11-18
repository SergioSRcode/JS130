// Create a function named makeCounterLogger that takes a number as an argument and returns a function.
// When we invoke the returned function with a second number,
// it should count up or down from the first number to the second number,
// logging each number to the console:

function makeCounterLogger(num) {
  return function(num2) {
    if (num < num2) {
      for (let i = num; i <= num2; i++) {
        console.log(i);
      }
    } else if (num > num2) {
      for (let i = num; i >= num2; i--) {
        console.log(i);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2