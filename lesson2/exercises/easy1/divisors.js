// Write a function that returns an array of all of the divisors of the positive integer passed in as an argument. The return value can be in any sequence you wish, though its easiest to return them in order.

/*
Rules:
- find all integers that can be used to divide the arg 
- 1 is always present 
- only count up to the arg number 

- create new empty arr "divisorsArr"
- Loop over all nums from 1 to input num 
  - check if input num can be divided by num
    - round down num. => if num === rounded num => true
    - if true => push to divisorsArr 
- return divisorsArr;
*/

function divisors(num) {
  const divisorsArr = [];

  for (let divisor = 1; divisor <= num; divisor++) {
    let current = num / divisor;
    if (current === Math.floor(current)) divisorsArr.push(divisor);
  }

  return divisorsArr;
}

let p = console.log;

p(divisors(1));          // [1]
p(divisors(7));          // [1, 7]
p(divisors(12));         // [1, 2, 3, 4, 6, 12]
p(divisors(98));         // [1, 2, 7, 14, 49, 98]

// This may take a minute or so to run
p(divisors(9995000429)); // [1, 99961, 99989, 9995000429]