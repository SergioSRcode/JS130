class Scrabble {
  constructor(word) {
    if (typeof word !== "string") word = "";
    
    this.word = word.toUpperCase();
    this.tileScores = {
      AEIOULNRST: 1,
      DG: 2,
      BCMP: 3,
      FHVWY: 4,
      K: 5,
      JX: 8,
      QZ: 10
    };
  }

  score() {
    let letters = Object.keys(this.tileScores);
    let score = 0;

    for (let i = 0; i < this.word.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (letters[j].includes(this.word[i])) score += this.tileScores[letters[j]];
      }
    }

    return score;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;