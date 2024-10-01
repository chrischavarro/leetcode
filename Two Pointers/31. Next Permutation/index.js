// 31. Next Permutation
// Solved
// Medium
// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]
 
// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// identify index of the first decreasing number, start checking from second to last number in array
// if decreasing number is found, look for the next largest number, start checking from end of array, swap values once it is found
// swap elements from i + 1 to the end of the array until both pointers cross over
var nextPermutation = function(nums) {
  let i = nums.length - 2
  // find the first decreasing number from the end
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // if first decreasing number is found, find next largest element
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[i] >= nums[j]) {
      j--
    }
    // swap first decreasing element and next largest element
    [nums[i], nums[j]] = [nums[j], [nums[i]]];
  }

  // reverse elements from i + 1 to end of array
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
}

// Initial Array:
// [ [2, 3, 1] ]

// Step-by-Step Explanation:
// 1. Find the first decreasing element from the end:
//    Initialize i to nums.length - 2, which is 1.
//    Check if nums[i] >= nums[i + 1]:
//      nums[1] = 3 and nums[2] = 1, so 3 >= 1 is true.
//      Decrement i to 0.
//    Check if nums[i] >= nums[i + 1]:
//      nums[0] = 2 and nums[1] = 3, so 2 >= 3 is false.
//    The first decreasing element from the end is at index 0 with value 2.
// 2. Find the element just larger than nums[i] to swap:
//    Since i >= 0, we proceed to find the element just larger than nums[i].
//    Initialize j to nums.length - 1, which is 2.
//    Check if nums[j] <= nums[i]:
//      nums[2] = 1 and nums[0] = 2, so 1 <= 2 is true.
//      Decrement j to 1.
//    Check if nums[j] <= nums[i]:
//      nums[1] = 3 and nums[0] = 2, so 3 <= 2 is false.
//    The element just larger than 2 is at index 1 with value 3.
//    Swap nums[i] and nums[j]:
//      Swap nums[0] and nums[1], resulting in the array: [ [3, 2, 1] ]
// 3. Reverse the elements from i + 1 to the end of the array:
//    Initialize left to i + 1, which is 1.
//    Initialize right to nums.length - 1, which is 2.
//    Swap nums[left] and nums[right]:
//      Swap nums[1] and nums[2], resulting in the array: [ [3, 1, 2] ]
//    Increment left to 2 and decrement right to 1.
//    Since left is no longer less than right, the reversal is complete.
// Final Array:
// [ [3, 1, 2] ]

// Summary:
// The next permutation of [2, 3, 1] is [3, 1, 2].