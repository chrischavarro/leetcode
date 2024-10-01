// 53. Maximum Subarray
// Solved
// Medium
// Given an integer array nums, find the 
// subarray with the largest sum, and return its sum.
 
// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
 
// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
// keep track of current sum by adding current element to it
// check if current sum is negative before adding current element, reset to zero if so
// initialize max sum as first element in the array
// update the max sum by taking the max of the current sum and max sum
var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let currentSum = 0;
  for (let num of nums) {
    currentSum = Math.max(currentSum, 0);
    currentSum += num;
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

// Sliding window implementation

// set a left and right pointer at the beginning of the array, right one will increment constantly
// set max left and right pointer variables to keep track of the largest subarray
// if current sum is negative, reset current sum to zero and move left pointer to right pointer position
// add value at right pointer to current sum, if greater than max sum, update max sum and max pointer indexes
function maxSubarray(nums) {
  let maxSum = nums[0];
  let currentSum = 0;
  let l = 0;
  let maxL = 0;
  let maxR = 0;
  for (let r = 0; r < nums.length; r++) {
    if (currentSum < 0) {
      currentSum = 0;
      l = r;
    }
    currentSum += nums[r];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxL = l;
      maxR = r;
    }
  }

  return [maxL, maxR];
}