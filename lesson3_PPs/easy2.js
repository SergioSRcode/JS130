// Write a program that can calculate the Hamming distance between two DNA strands.

// By counting the number of differences between two homologous DNA strands
// taken from different genomes with a common ancestor,
// we get a measure of the minimum number of point mutations that could have occurred
// on the evolutionary path between the two strands.

// This is called the Hamming distance.

// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// ^ ^ ^  ^ ^    ^^

// The Hamming distance between these two DNA strands is 7.

// The Hamming distance is only defined for sequences of equal length. 
// If you have two sequences of unequal length, you should compute the 
// Hamming distance over the shorter length.

/*
RR:



- 2 empty strings still return a count (0)
- no differences returns the count 0
- first str is passed upon instantiation
- second str is passed upon invokation of the method "hammingDistance()"




- create a DNA class
  - define constructor method
    - takes 1 str arg

  - define hammingDistance method on class
    - takes 1 str arg
    - counts differences of strs
    - returns count

 - compare two strings (invoke inside hammingDistance)
  - if they don't have the same length => 
      -shorten the longer one to the length of the shorter str
        - put both in an arr, sort in ascending order acc to their length
          - slice the second one from 0 - length of 1st.
     
          
ALGO:
- create DNA class
- define constructor (str1)
  - this.str1 = str1;
- define hammingDistance (str2)
  - COUNT = 0;
  - DNAS = [this.str1, str2].sort((a, b) => a - b);  -> ascending order
  - str2 = DNAS[1].slice(0, DNAS[0].length);
  - Iterate over both strs
    - for each difference => increment COUNT
  - return COUNT
*/

class DNA {
  constructor(str1) {
    this.str1 = str1;
  }

  hammingDistance(str2) {
    let differences = 0;

    const SORTED_DNAS = [this.str1, str2].sort((a, b) => a.length - b.length);
    const MIN_LENGTH = SORTED_DNAS[0].length;
 
    for (let i = 0; i < MIN_LENGTH; i++) {
      if (this.str1[i] !== str2[i]) differences += 1;
    }

    return differences;
  }
}

module.exports = DNA;