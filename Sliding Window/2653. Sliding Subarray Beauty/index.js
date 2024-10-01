// 2653. Sliding Subarray Beauty
// Solved
// Medium

// The beauty of a subarray is the xth smallest integer in the subarray if it is negative, or 0 if there are fewer than x negative integers.

// Return an integer array containing n - k + 1 integers, which denote the beauty of the subarrays in order from the first index in the array.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,-1,-3,-2,3], k = 3, x = 2
// Output: [-1,-2,-2]
// Explanation: There are 3 subarrays with size k = 3. 
// The first subarray is [1, -1, -3] and the 2nd smallest negative integer is -1. 
// The second subarray is [-1, -3, -2] and the 2nd smallest negative integer is -2. 
// The third subarray is [-3, -2, 3] and the 2nd smallest negative integer is -2.
// Example 2:

// Input: nums = [-1,-2,-3,-4,-5], k = 2, x = 2
// Output: [-1,-2,-3,-4]
// Explanation: There are 4 subarrays with size k = 2.
// For [-1, -2], the 2nd smallest negative integer is -1.
// For [-2, -3], the 2nd smallest negative integer is -2.
// For [-3, -4], the 2nd smallest negative integer is -3.
// For [-4, -5], the 2nd smallest negative integer is -4. 
// Example 3:

// Input: nums = [-3,1,2,-3,0,-3], k = 2, x = 1
// Output: [-3,0,-3,-3,-3]
// Explanation: There are 5 subarrays with size k = 2.
// For [-3, 1], the 1st smallest negative integer is -3.
// For [1, 2], there is no negative integer so the beauty is 0.
// For [2, -3], the 1st smallest negative integer is -3.
// For [-3, 0], the 1st smallest negative integer is -3.
// For [0, -3], the 1st smallest negative integer is -3.
 
// Constraints:

// n == nums.length 
// 1 <= n <= 105
// 1 <= k <= n
// 1 <= x <= k 
// -50 <= nums[i] <= 50 

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// keep track of the frequency of values found in subarray
// if window size exceeds k, update map and shrink window from the left
// if window size equals k, we can look for the beauty/xth smallest value
// create initial beauty value and counter value of 0 
// xth smallest value is found by counting from the bottom of the range (-50) to 0
// whenever we find a matching value in the map, we add its frequency count to a counter
// when the counter reaches or exceeds x, set beauty as the current value break the loop
// outside of the loop, push the beauty to result array
var getSubarrayBeauty = function(nums, k, x) {
  let result = [];
  let l = 0;
  let map = new Map();
  for (let r = 0; r < nums.length; r++) {
    if (r - l + 1 > k) {
      map.get(nums[l]) === 1 ? map.delete(nums[l]) : map.set(nums[l], map.get(nums[l]) - 1);
      l++;
    }
    map.set(nums[r], 1 + (map.get(nums[r]) || 0));
    if (r - l + 1 === k) {
      let beauty = 0;
      let counter = 0;
      for (let i = -50; i < 0; i++) {
        if (map.has(i)) counter += map.get(i);
        if (counter >= x) {
          beauty = i;
          break;
        }
      }
      result.push(beauty);
    }
  }
  return result;
}