// 70. Climbing Stairs
// Solved
// Easy

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 
// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */

/* 
  base case:
    - we reach 0, we return 1
    - we reach a negative value, we return 0
  combinator:
    - addition, we are summing all distinct ways
  recursive subproblem:
    - finding ways to reach n 1 or 2 steps at a time
*/

/* 
  create a cache to store results for n
  recurse on n, return 1 if it equals 0 since we've reached a valid path
  return 0 if n is less than 0 since no valid path exists
  check cache for value of n and return if it exists
  otherwise, set the value as recursive call taking 1 step plus recursive call taking 2 steps
  return the cached value
*/
function climbStairs(n) {
  const cache = new Map();
  function climb(i) {
    if (i === 0) {
      return 1;
    }
    if (i < 0) {
      return 0;
    }
    if (cache.has(i)) {
      return cache.get(i);
    }
    cache.set(i, climb(i - 1) + climb(i - 2));
    return cache.get(i);
  }
  return climb(n);
}