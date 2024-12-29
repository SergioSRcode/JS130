/*
Write a program that will take a string of digits and return all the possible
consecutive number series of a specified length in that string.

For example, the string "01234" has the following 3-digit series:

012
123
234

-> get all consecutive substrings with a length of arg
  -> turn each substring to an arr with split("")
  -> turn each string to a num
  -> push arr to master arr

*/

class Series {
  constructor(numStr) {
    this.numStr = numStr;
  }

  slices(size) {
    if (size > this.numStr.length) throw new Error("specified length is greater than length of str");
    const CONSEC_NUMS = [];

    for (let i = 0; i < this.numStr.length - (size - 1); i++) {
      let substring = this.numStr.slice(i, i + size);
      let arrOfSubs = substring.split("").map(char => Number(char));
      CONSEC_NUMS.push(arrOfSubs);
    }

    return CONSEC_NUMS;
  }
}

module.exports = Series;

