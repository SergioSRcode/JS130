/*
Get all divisors of a num and get their sum => Aliquot sum

Perfect numbers have an Aliquot sum that is equal to the original number.
Abundant numbers have an Aliquot sum that is greater than the original number.
Deficient numbers have an Aliquot sum that is less than the original number.

if argument is not a natural num (e.g. a negative num), throw an error.

*/

class NaturalNum {
  static classify(num) {
    if ((num < 1) || (num !== Math.floor(num))) throw new Error("not a natural number");

    if (NaturalNum.isDeficient(num)) return 'deficient';
    if (NaturalNum.isPerfect(num)) return 'perfect';
    if (NaturalNum.isAbundant(num)) return 'abundant';
  }

  static getDivisorsSum(num) {
    const DIVISORS = [];

    for (let i = 1; i < num; i++) {
      if (num % i === 0) DIVISORS.push(i);
    }

    return DIVISORS.reduce((acc, n) => acc + n, 0);
  }

  static isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  static isDeficient(num) {
    if (NaturalNum.isPrime(num)) return true;
    if (NaturalNum.getDivisorsSum(num) < num) return true;
    
    return false;
  }

  static isPerfect(num) {
    if (NaturalNum.getDivisorsSum(num) === num) return true;

    return false;
  }

  static isAbundant(num) {
    if (NaturalNum.getDivisorsSum(num) > num) return true;

    return false;
  }
}

module.exports = NaturalNum;
