/*
Implement octal to decimal conversion. 
Given an octal input string, your program should produce a decimal output. 
Treat invalid input as octal 0. The only valid digits in an octal number are 0, 1, 2, 3, 4, 5, 6, and 7.

-create emtpy arr for multiplications
-turn octal into string, split to arr. => reverse
-iterate over length of octal arr 
  -> multiply current num with current num in octalNums
    -> unshift product to emtpy arr
- get sum of all nums inside arr
- return sum



*/


class Octal {
  constructor(octal) {
    this.octal = octal;
    this.octalNums = [1, 8, 64, 512, 4096, 32768, 262144];
  }

  isValidOctal() {
    let octals = "01234567";
    let octalArr = String(this.octal).split("");

    for (let i = 0; i < octalArr.length; i++) {
      if (!octals.includes(octalArr[i])) return false;
    }

    return true;
  }

  toDecimal() {
    if (!this.isValidOctal()) return 0;

    const multiplications = [];
    let reversedOctalArr = String(this.octal).split("").reverse();

    for (let i = 0; i < reversedOctalArr.length; i++) {
      multiplications.unshift(reversedOctalArr[i] * this.octalNums[i]);
    }

    return multiplications.reduce((acc, num) => acc + num, 0);
  }
}

module.exports = Octal;


