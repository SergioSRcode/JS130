
// function foo() {
//   if (true) {
//     var a = 1;
//     let b = 2;
//   }

//   console.log(a); // 1
//   console.log(b); // ReferenceError: b is not defined
// }

// foo();


function foo() {
  if (false) {
    var a = 1;
  }

  console.log(a); // undefined
}

foo();