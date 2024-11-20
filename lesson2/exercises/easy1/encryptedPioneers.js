"use strict";

// Write a program that deciphers and prints each of these names.

// Nqn Ybirynpr
// Tenpr Ubccre
// Nqryr Tbyqfgvar
// Nyna Ghevat
// Puneyrf Onoontr
// Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv
// Wbua Ngnanfbss
// Ybvf Unvog
// Pynhqr Funaaba
// Fgrir Wbof
// Ovyy Tngrf
// Gvz Orearef-Yrr
// Fgrir Jbmavnx
// Xbaenq Mhfr
// Fve Nagbal Ubner
// Zneiva Zvafxl
// Lhxvuveb Zngfhzbgb
// Unllvz Fybavzfxv
// Tregehqr Oynapu

/*
- get arr of slphabet keys
- create word arr (empty)

- iterate over current names letters
  - if letter is not included in alphabet keys -> keep letter
  - else check letter 13 numbers before
    - get key of num
    - push key to new word arr

  - if num is less than 13
    - difference = 13 - num
    - 26 - difference
    - get key of num
    - push key to new word arr
*/

const ENCRYPTED_PIONEERS = [
  'Nqn Ybirynpr',
  'Tenpr Ubccre',
  'Nqryr Tbyqfgvar',
  'Nyna Ghevat',
  'Puneyrf Onoontr',
  'Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv',
  'Wbua Ngnanfbss',
  'Ybvf Unvog',
  'Pynhqr Funaaba',
  'Fgrir Wbof',
  'Ovyy Tngrf',
  'Gvz Orearef-Yrr',
  'Fgrir Jbmavnx',
  'Xbaenq Mhfr',
  'Fve Nagbal Ubner',
  'Zneiva Zvafxl',
  'Lhxvuveb Zngfhzbgb',
  'Unllvz Fybavzfxv',
  'Tregehqr Oynapu'
];

const ALPHABET = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function getLetterFromNum(num) {
  let alphaEntries = Object.entries(ALPHABET);

  for (let i = 0; i < alphaEntries.length; i++) {
    if (alphaEntries[i][1] === num) return alphaEntries[i][0];
  }
}

function turnCorrectCharsUpper(orig, newArr) {
  let alphaKeys = Object.keys(ALPHABET);
  for (let i = 0; i < orig.length; i++) {
    if ((orig[i] === orig[i].toUpperCase()) && alphaKeys.includes(newArr[i])) {
      newArr[i] = newArr[i].toUpperCase();
    }
  }

  return newArr;
}

function decryptRot13(name) {
  let alphaKeys = Object.keys(ALPHABET);
  let decryptedName = [];

  for (let i = 0; i < name.length; i++) {
    if (!alphaKeys.includes(name[i].toLowerCase())) {
      decryptedName.push(name[i]);
    } else if (ALPHABET[name[i]] < 13) {
      let decryptedNum = 26 - (13 - ALPHABET[name[i].toLowerCase()]);
      decryptedName.push(getLetterFromNum(decryptedNum));
    } else {
      let decryptedNum = ALPHABET[name[i].toLowerCase()] - 13;
      decryptedName.push(getLetterFromNum(decryptedNum));
    }
  }

  return turnCorrectCharsUpper(name, decryptedName).join("");
}


ENCRYPTED_PIONEERS.forEach(pion => console.log(decryptRot13(pion)));
// console.log(decryptRot13("Nqn Ybirynpr"));
// console.log(getLetterFromNum(22));
// console.log(getLetterFromNum(1));
// console.log(getLetterFromNum(26));