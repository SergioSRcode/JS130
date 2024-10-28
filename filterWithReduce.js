
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reduce((acc, number) => {
//  if (number > 3) acc.push(number);
//  return acc;
// }, [])); // => [ 4, 5 ]
// console.log(numbers.reduce((acc, number) => {
//   if (number < 0) acc.push(number);
//   return acc;
// }, [])); // => []
// console.log(numbers.reduce((acc, number) => {
//   if (true) acc.push(number);
//   return acc;
// }, []));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(values.reduce((acc, value) => {
//   if (typeof value === "string") acc.push(value);
//   return acc;
// }, []));
// // => [ 'abc', 'xyz' ]

function filter(arr, callback) {
  return arr.reduce((acc, val) => {
    if (callback(val)) acc.push(val);
    return acc;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]