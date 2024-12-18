/*
Turn a decimal into a roman numeral

2036
-> 2000
36
-> 6
  -> VI
-> 30 
-> 10, 10, 10
-> XXX

2000
-> MM

[VI, XXX, MM] -> reverse arr
[MM, XXX, VI] -> turn to string
-> MMXXXVI


ALGO:

- check if first num is smaller or greater than 5
  -> if 0 => skip
  -> set testnum to 1
  -> while smaller => is num === testnum?
    -> if not => increment testnum
    -> if num === testnum => 


*/


let romanNums = require('./easy3_obj.js');

class RomanNumeral {
  constructor(num) {
    this.num = num;
    this.romanNumerals = romanNums;
  }

  toRoman() {
    let result = "";
    const romansArr = Object.entries(this.romanNumerals).reverse();

    for (let i = 0; i < romansArr.length; i++) {
      while (this.num >= romansArr[i][1]) {
        this.num -= romansArr[i][1];
        result += romansArr[i][0];
      }
    }
    
    return result;
  }
}

module.exports = RomanNumeral;
