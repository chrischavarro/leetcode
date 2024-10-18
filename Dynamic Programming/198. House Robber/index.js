// 198. House Robber
// Solved
// Medium

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
  base case:
    - we reach 0, we return value at that index
    - we reach a negative value, we return 0
  combinator:
    - max, take the largest between recursing on next house or two houses down
  recursive subproblem:
    - calculate the largest value between adjacent house and two houses down
*/

/* 
  create a cache to store results
  create dfs function to iterate through array
  if array has a single element, return that value
  if index becomes negative, return 0
  check cache for i and return value if it exists
  calculate the largest between result of previous house and adding current house to two houses down
  call dfs starting from end of the array
*/
function robDP(nums) {
  const cache = new Map();
  function dfs(i) {
    if (i < 0) {
      return 0;
    }
    if (i === 0) {
      return nums[i];
    }
    if (cache.has(i)) {
      return cache.get(i);
    }
    cache.set(i, Math.max(dfs(i - 1), nums[i] + dfs(i - 2)));
    return cache.get(i);
  }
  return dfs(nums.length - 1);
}

/* 
  return element at first index if array only has one numbers
  return largest of two values if array has two numbers
  initialize cache with first numbers and the largest of the first two numbers
  iterate from index 2 through the rest of the array
  calculate the largest between result of previous house and adding current house to two houses down
  set that largest value in cache for the current index
  return element at end of the cache array
*/
function robTabulation(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  const cache = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    cache[i] = Math.max(cache[i - 1], nums[i] + cache[i - 2]);
  }
  return cache[nums.length - 1];
}