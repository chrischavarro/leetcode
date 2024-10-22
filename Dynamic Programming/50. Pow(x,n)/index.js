// 50. Pow(x, n)
// Solved
// Medium
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn). 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */


/* 
  base case:
    - i is equal to 0, we return 1
  combinator:
    - multiply, we multiply half * half or half * half * x
  recursive problem:
    - calculate pow(x,n) for n/2
*/

/* 
  If n is negative, divide x by itself and set n to -n
  create dfs function to decrement from n to base case (0)
  if base case is reached, return 1
  define half as recursive output on half of n
  if i is even, return half * half
  if i is odd, return half * half * i
  return call of dfs function with initial value of n
*/
function myPow(x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  function dfs(i) {
    if (i === 0) {
      return 1;
    }
    let half = dfs(Math.floor(i / 2));
    if (i % 2 === 0) {
      return half * half;
    } else {
      return half * half * x;
    }
  }
  return dfs(n);
}