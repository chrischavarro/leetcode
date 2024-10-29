// 912. Sort an Array
// Solved
// Medium

// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.
 
// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

/**
 * @param {number[]} nums
 * @return {number[]}
 */

function swap(index1, index2, arr) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function heapify(n, root, arr) {
  let i = root;
  let left = root * 2 + 1;
  let right = root * 2 + 2;
  if (left < n && arr[i] < arr[left]) {
    i = left;
  }
  if (right < n && arr[i] < arr[right]) {
    i = right;
  }
  if (i !== root) {
    swap(root, i, arr);
    heapify(n, i, arr);
  }
}

function sortArray(nums) {
  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    heapify(nums.length, i, nums);
  }

  for (let i = nums.length - 1; i > 0; i--) {
    swap(0, i, nums);
    heapify(i, 0, nums);
  }
  return nums;
}