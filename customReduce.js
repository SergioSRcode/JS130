/*
pass in arr
create accumulator = if value is undefined => arr[idx0]
pass in first element = if acc undefined => val of ele => arr[idx1]


*/

function reduce(arr, callback, accum) {

  for (let idx = 0; idx < arr.length; idx++) {
    if (accum === undefined && idx === 0) {
      accum = callback(accum = arr[0], arr[idx + 1]);
      idx += 1;
    } else {
      accum = callback(accum, arr[idx]);
    }
  }

  return accum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// // => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// // => ["Curly", "Larry", "Mo"]

console.log(stooges);