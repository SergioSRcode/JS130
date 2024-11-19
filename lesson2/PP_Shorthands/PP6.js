// function product(...numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

function product() {
  let nums = arguments;
  return [].reduce.call(nums, (total, number) => total * number);
}

let result = product(2, 3, 4, 5);
console.log(result);