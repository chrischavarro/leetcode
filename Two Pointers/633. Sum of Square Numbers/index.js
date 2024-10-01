// 633. Sum of Square Numbers
// Solved
// Medium
// Topics
// Companies
// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:

// Input: c = 3
// Output: false 

// Constraints:

// 0 <= c <= 231 - 1
/**
 * @param {number} c
 * @return {boolean}
 */
// set max value b as the square root of c
// set min value a as 0
// calculate the sum as we move the pointers/values inward
// return false if values are equal and no matching sum is found 
var judgeSquareSum = function(c) {
  let l = 0;
  let r = Math.floor(Math.sqrt(c));
  while (l <= r) {
    let sum = Math.pow(l, 2) + Math.pow(r, 2);
    if (sum === c) {
      return true;
    } else if (sum > c) {
      r--;
    } else if (sum < c) {
      l++;
    }
  }
  return false;
}