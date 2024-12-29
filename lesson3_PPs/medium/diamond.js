/*
The diamond exercise takes as its input a letter, and outputs it in a diamond shape.
Given a letter, it prints a diamond starting with 'A', with the supplied letter at the widest point.

alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  A
 B B
C   C
 B B
  A

    A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A
- leading whitespace starts at input char index (" " * idx)
- spaces inside increment by 2

*/

class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let range = this.letterRange(letter);
    let widthOfDiamond = this.maxWidth(letter);

    let diamond = [];
    range.forEach(letter => {
      diamond.push(this.center(this.makeRow(letter), widthOfDiamond));
    });

    return `${diamond.join("\n")}\n`;
  }

  static makeRow(letter) {
    if (letter === 'A') return 'A';
    if (letter === 'B') return 'B B';

    return letter + this.determineSpaces(letter) + letter;
  }

  static maxWidth(letter) {
    if (letter === 'A') return 1;

    return this.determineSpaces(letter).length + 2;
  }

  static center(content, width) {
    let outerPad = (width - content.length) / 2;
    let padStr = (' ').repeat(outerPad);
    return `${padStr}${content}${padStr}`;
  }

  static letterRange(letter) {
    let range = [];

    for (let i = 0; i < this.alphabet.length; i++) {
      let currentChar = this.alphabet[i];

      range.push(currentChar);
      if (currentChar === letter) break;
    }

    return [...range, ...range.reverse().slice(1)];
  }

  static determineSpaces(letter) {
    let currLetterIdx = 1;
    let spaces = 1;
    let currentLetter = this.alphabet[currLetterIdx];

    while (currentLetter !== letter) {
      spaces += 2;
      currLetterIdx++;
      currentLetter = this.alphabet[currLetterIdx];
    }

    return (' ').repeat(spaces);
  }
}

module.exports = Diamond;
