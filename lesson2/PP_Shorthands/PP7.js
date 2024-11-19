// Replace the word HERE in the following code so 
// the program prints the results shown:

// const HERE = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// const HERE = { foo: 42, bar: 3.1415, qux: "abc" };
// let {foo, ...rest} = HERE;
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

let {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
console.log(foo);         // 42
console.log(rest);        // { bar: 3.1415, qux: 'abc' }