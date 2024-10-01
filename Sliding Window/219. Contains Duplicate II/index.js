// 219. Contains Duplicate II
// Solved
// Easy
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 
// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// traverse string and store values in a set
// if window size exceeds k, remove left pointer value from set and increment pointer
// if set already contains value at right pointer, return true
function containsDuplicate(nums, k) {
  let l = 0;
  let set = new Set();
  for (let r = 0; i < nums.length; r++) {
    if (r - l > k) {
      set.delete(nums[l]);
      l++;
    }
    if (set.has(nums[r])) return true;
    set.add(nums[r]);
  }
  return false;
}