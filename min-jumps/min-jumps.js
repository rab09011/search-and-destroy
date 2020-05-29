"use strict";

// Complete this algo
const minJumps = (arr) => {
  let chosen,
    jumps = 0,
    pointer = 0,
    value = arr[pointer],
    best = value,
    potential;
  if (arr.length < 2) {
    return 0;
  }
  while (pointer < arr.length) {
    if (value + pointer >= arr.length - 1) {
      return ++jumps;
    }
    for (let i = pointer + 1; i <= value + pointer; i++) {
      potential = arr[i] + (i - pointer);
      if (potential > best) {
        best = potential;
        chosen = i;
      }
    }
    pointer = chosen;
    jumps++;
    value = arr[pointer];
    best = value;
  }
  return jumps;
};

const test2 = [6, 3, 2, 1];
const test3 = [2, 4, 1, 1, 2, 3, 7, 1, 1, 3];
const test4 = [2, 3, 1, 1, 1, 1, 3, 7, 2, 4];
console.log(minJumps(test2));
console.log(minJumps(test3));
console.log(minJumps(test4));

module.exports = minJumps;
