let mystr = "cast";

if (mystr.match(/s/)) console.log("matched 's'");  // conditional is truthy
if (mystr.match(/s/)) console.log(mystr.match(/s/));  // loggs arr
if (mystr.match(/x/)) console.log("matched 'x'");  // conditional is falsy
console.log(mystr.match(/x/));  // loggs null