let obj = {
  foo: 'foo',
  qux: 'qux',
  bar: 'bar',
};

let obj2 = {...obj};
let { ...obj3 } = obj;

// Explain in detail what lines 7 and 8 of this code are doing.
/*
Line 7 essentially creates a copy 
of obj by passing all it's enumerable properties to obj2 using spread syntax

Line 8 shows rest syntax that bundles all properties of obj in
form of a new object in a new variable called obj3. 

In this particular case, both spread and rest syntax fulfill the same role.
*/