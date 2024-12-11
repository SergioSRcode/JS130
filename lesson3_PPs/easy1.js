"use strict";

/*
Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.
An isosceles triangle has exactly two sides of the same length.
A scalene triangle has all sides of different lengths.

Check if 2 or 3 sides have the same length 
check if no sides have the same length

Data structure:
Class -> kind() method -> returns equilateral, isosceles, or scalene as strings
side lengths are passed to constructor as arguments

ALgo:
- create a Triangle class that takes always 3 number args
- define constructor method
  - define 3 sides
- define kind method
  - returns a string of the triangle kind

- returns a string of the triangle kind
  1. check if all 3 are equal
    - return "equilateral"
  2. else if 2 are equal
    - return "isosceles"
  3. else if none are equal
    - return "scalene"

- are 3 equal?
  - get first side
  - [1, 2, 3].every(side => side === firstside)
    - return true else false

- are 2 equal?
  - put sides in arr [1, 2, 3]
  - sort arr
  - check if 1 char equals 2nd char OR 2 char equal 3rd char
    - return true else false
*/

class Triangle {
  constructor(s1, s2, s3) {
    this.sides = [s1, s2, s3];

    if (!this.isTriangle()) throw new Error("Not a Triangle");
  }

  isTriangle() {
    if (this.sides.slice().every((side) => side <= 0)) return false;
    const SORTED_SIDES = this.sides.slice().sort((a, b) => a - b);
    
    return (SORTED_SIDES[0] + SORTED_SIDES[1] > SORTED_SIDES[2]); 
  }

  isEquilateral() {
    return this.sides.slice().every(side => this.sides[0] === side);
  }

  isIsosceles() {
    const SORTED_SIDES = this.sides.slice().sort((a, b) => a - b);

    return (SORTED_SIDES[1] === SORTED_SIDES[0] || SORTED_SIDES[1] === SORTED_SIDES[2]);
  }

  kind() {
    if (this.isEquilateral()) return "equilateral";
    if (this.isIsosceles()) return "isosceles";
    return "scalene";
  }
}

module.exports = Triangle;

// let t = new Triangle(0, 0, 0);
// t.kind();
// console.log(t.sides);
// console.log(t.isTriangle());
// console.log(t.allAreEqual());
// console.log(t.isIsosceles());