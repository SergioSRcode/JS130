"use strict";

/*
Write a function named makeMultipleLister that you can call with a number as an argument.
The function should return a new function that, when invoked,
logs every positive integer multiple of that number less than 100.

It should work like this:
*/

let makeMultipleLister = (num) => {
  return () => {
    for (let i = num; i < 100; i++) {
      if (i % num === 0) console.log(i);
    }
  };
}

let lister = makeMultipleLister(17);
lister();

/*
Output:

17
34
51
68
85

*/