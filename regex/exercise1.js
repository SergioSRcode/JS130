// Write a method that returns true if its argument looks like a URL, false if it does not.

function isUrl(str) {
  if (str.match(/^https?:\/\/\S+$/gi)) return true;
  return false;
}

console.log(isUrl('https://launchschool.com'));   // -> true
console.log(isUrl('http://example.com'));         // -> true
console.log(isUrl('https://example.com hello'));  // -> false
console.log(isUrl('   https://example.com'));     // -> false