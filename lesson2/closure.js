function createCounter() {
  let counter = 0
  const myFunction = function() {
    counter = counter + 1
    return counter
  }
  return myFunction
}

  const increment = createCounter()
  const c1 = increment()
  const c2 = increment()
  const c3 = increment()
  console.log('example increment', c1, c2, c3)


  // example 2 with error functions adding numbers

let c = 4;
// arrow func that immediately returns an arrow func.
const addX = x => n => n + x; 
// invoking first arrow func, receiving the value for "x" and returning
// the func. "n => n + x"
const addThree = addX(3);
// invoking the second arrow func, receiving the value for "n"
// adding n + x and returning the sum to "d";
let d = addThree(c);
// logging d === 4 + 3
console.log('example partial application', d);