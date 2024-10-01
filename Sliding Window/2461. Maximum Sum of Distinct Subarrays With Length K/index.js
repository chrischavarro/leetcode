// 2461. Maximum Sum of Distinct Subarrays With Length K

// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15
// Explanation: The subarrays of nums with length 3 are:
// - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
// Example 2:

// Input: nums = [4,4,4], k = 3
// Output: 0
// Explanation: The subarrays of nums with length 3 are:
// - [4,4,4] which does not meet the requirements because the element 4 is repeated.
// We return 0 because no subarrays meet the conditions.
 
// Constraints:

// 1 <= k <= nums.length <= 105
// 1 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// traverse array and add current value to sum, as well as to map to track frequency
// if window size exceeds k, decrement sum and count or remove character from left pointer value, increment pointer
// if map size and window size equal k, recalculate max sum 
var maximumSubarraySum = function(nums, k) {
  let maxSum = 0;
  let sum = 0;
  let map = new Map();
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (r - l >= k) {
      map.get(nums[l]) === 1 ? map.delete(nums[l]) : map.set(nums[l], map.get(nums[l]) - 1);
      sum -= nums[l];
      l++
    }
    sum += nums[r];
    map.set(nums[r], 1 + (map.get(nums[r]) || 0));
    if (map.size === k && r - l + 1 === k) maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}