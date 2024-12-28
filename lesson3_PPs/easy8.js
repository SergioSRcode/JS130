//Sum of Multiples

/*
Write a program that, given a natural number and a set of one or more other numbers,
can find the sum of all the multiples of the numbers in the set that are less than the first number.
If the set of numbers is not given, use a default set of 3 and 5.

Constructor
  - takes multiple single nums as args
    -> should be destructured to an array
  - contains static method
    -> to => which takes limit num as arg
      -> checks for all multiples of 3 and 5 up to (not including the limit num)
      -> returns the sum
  - contains instance method
    -> to => which takes limit num as arg
      -> checks for all multiples of the nums passed to constructor up to limit num 
      -> returns the sum

*/

// class SumOfMultiples {
//   static to(limit) {
//     const MULTIPLES = [];

//     for (let i = 3; i < limit; i++) {
//       if (i % 3 === 0 || i % 5 === 0) MULTIPLES.push(i);
//     }

//     return MULTIPLES.reduce((acc, num) => acc + num, 0);
//   }

//   constructor(...setOfNums) {
//     this.nums = [...setOfNums];
//   }

//   to(limit) {
//     const MULTIPLES = [];

//     this.nums.forEach(num => {
//       for (let i = num; i < limit; i++) {
//         if (i % num === 0 && !MULTIPLES.includes(i)) MULTIPLES.push(i);
//       }
//     });

//     return MULTIPLES.reduce((acc, num) => acc + num, 0);
//   }
// }


class SumOfMultiples {
  static to(limit) {
    let obj = new SumOfMultiples(3, 5);
    return obj.to(limit);
  }

  constructor(...setOfNums) {
    this.nums = setOfNums;
  }

  to(limit) {
    const MULTIPLES = [];

    this.nums.forEach(num => {
      for (let i = num; i < limit; i++) {
        if (i % num === 0 && !MULTIPLES.includes(i)) MULTIPLES.push(i);
      }
    });

    return MULTIPLES.reduce((acc, num) => acc + num, 0);
  }
}

// console.log(new SumOfMultiples(1, 2, 4, 5).nums);
// console.log(new SumOfMultiples(7, 2, 3).nums)
// console.log(SumOfMultiples.to(10));  // => [3, 5, 6, 9]
// console.log(SumOfMultiples.to(1));  // => 0
// console.log(SumOfMultiples.to(4));  // => 3

// new SumOfMultiples(7, 2, 3).to(10); // => [7, 2, 4, 6, 8, 3, 9]

module.exports = SumOfMultiples;