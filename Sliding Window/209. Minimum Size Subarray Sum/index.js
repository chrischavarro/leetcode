// 209. Minimum Size Subarray Sum
// Solved
// Medium
// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 
// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// keep track of minimum subarray length as r - l + 1
// iterate through array and keep track of sum being incremented by right pointer value
// while the sum equals or exceeds the target, calculate min size subarray and increment left pointer
var minSubArrayLen = function(target, nums) {
  let sum = 0;
  let min = Infinity;
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    while (sum >= target) {
      min = Math.min(min, r - l + 1);
      sum -= nums[l];
      l++;
    }
  }
  if (min === Infinity) return 0;
  return min;
}