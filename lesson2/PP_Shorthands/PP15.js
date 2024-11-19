// Use spread syntax to invoke the prod function with arr 
// and explain what is happening as part of your answer.

const arr = [1, 2, 3];

function prod(num1, num2) {
  return num1 * num2;
}

console.log(prod(...arr));  // 2

/*
The arguments 1, 2, 3 are being individually passed to the 
prod function as arguments. The prod function however only provides/defines
two parameter, num1 for 1 and num2 for 2.
Then prod returns the product of num1 and num2.
*/