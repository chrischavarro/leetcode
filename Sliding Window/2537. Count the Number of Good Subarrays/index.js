// 2537. Count the Number of Good Subarrays

// A subarray arr is good if it there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].

// A subarray is a contiguous non-empty sequence of elements within an array.
 
// Example 1:

// Input: nums = [1,1,1,1,1], k = 10
// Output: 1
// Explanation: The only good subarray is the array nums itself.
// Example 2:

// Input: nums = [3,1,4,3,2,2,4], k = 2
// Output: 4
// Explanation: There are 4 different good subarrays:
// - [3,1,4,3,2,2] that has 2 pairs.
// - [3,1,4,3,2,2,4] that has 3 pairs.
// - [1,4,3,2,2,4] that has 2 pairs.
// - [4,3,2,2,4] that has 2 pairs.
 
// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i], k <= 109

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// keep track of number frequency in a map as array is traversed
// if value already exists in map, increment pair count by count in map
// while pair count meet or exceeds k, update map and pair count at left pointer
// increment left pointer and add length of untraversed array to result
var countGood = function(nums, k) {
  let result = 0;
  let pairCount = 0;
  let l = 0;
  let map = new Map();
  for (let r = 0; r < nums.length; r++) {
    if (map.has(nums[r])) {
      pairCount += map.get(nums[r]);
    }
    map.set(nums[r], 1 + (map.get(nums[r]) || 0));
    while (pairCount >= k) {
      map.set(nums[l], map.get(nums[l]) - 1);
      pairCount -= map.get(nums[l]);
      l++;
      result += nums.length - r;
    }
  }
  return result;
}