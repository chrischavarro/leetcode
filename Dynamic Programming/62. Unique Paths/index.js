// 62. Unique Paths
// Solved
// Medium

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down 

// Constraints:

// 1 <= m, n <= 100

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/* 
  base case:
    - i and j are equal to 0, we return 1
    - i or j are negative, we return 0
  combinator:
    - addition, we add the unique paths decrementing down or right
  recursive problem:
    - at each recursive call, move either down or right
*/

/* 
  If i and j are 0, we found a path and return 1
  If i or j are negative, we are out of bounds and return 0
  If cache has value corresponding to i,j return it
  Otherwise, sum recursive calls of i-1,j and i,j-1 and save in cache
  return sum of recursive calls
  return call of dfs function with m-1, n-1
*/

function uniquePathsMemoRecursive(m, n) {
  const cache = new Map();
  function dfs(i, j) {
    if (i === 0 && j === 0) {
      return 1;
    }
    if (i < 0 || j < 0) {
      return 0;
    }
    if (cache.has(`${i},${j}`)) {
      return cache.get(`${i},${j}`);
    }
    cache.set(`${i},${j}`, dfs(i-1, j) + dfs(i, j-1));
    return cache.get(`${i},${j}`);
  }
  return dfs(m-1, n-1);
}

/* 
  create a cache as a 2d array where initial value is 1 to reflect a single unique path
  create a nested for loop where i and j iterate up through m and n
  if i and j are both zero, continue to skip calculation
  calculate left as i-1, j or 0 if i is greater than 0
  calculate right as i, j - 1 or 0 if j is greater than 0
  set sum of left and right in cache for [i][j]
  return last element in cache, or cache[m-1][n-1]
*/

function create2DArray(m, n) { 
  return Array.from({ length: m }, () => new Array(n).fill(0)); }

function uniquePathsTabulation(m, n) {
  const cache = create2DArray(m, n);
  cache[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      let left = i > 0 ? cache[i-1][j] : 0;
      let right = j > 0 ? cache[i][j-1] : 0;
      cache[i][j] = left + right
    }
  }
  return cache[m-1][n-1];
}