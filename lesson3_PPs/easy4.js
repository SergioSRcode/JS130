"use strict";

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(possibleAnagrams) {
    let sortedWords = possibleAnagrams.map(word => word.toLowerCase().split("").sort().join(""));
    let sortedWord = this.word.toLowerCase().split("").sort().join("");
    let anagrams = [];

    for (let i = 0; i < sortedWords.length; i++) {
      if ((sortedWord === sortedWords[i]) && 
         (this.word.toLowerCase() !== possibleAnagrams[i].toLowerCase())) {
        anagrams.push(possibleAnagrams[i]);
      }
    }

    return anagrams;
  }
}

module.exports = Anagram;