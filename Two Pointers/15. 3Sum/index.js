/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// start with first number after sorting array and skip duplicates when compared to the number before it
// sum up first number's neighbor and the last number in the array
// add matching triplets to solution and move first number's neighbor until duplicates are skipped
// check next smallest number if sum is too large, check next largest number if sum is too small 
function threeSum(nums) {
  // Sort the array to make it easier to avoid duplicates and use two pointers
  const result = [];
  nums = nums.sort((a, b ) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // Skip duplicate elements to avoid duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
       // Calculate the sum of the current triplet
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++
        // Skip duplicate elements
        while (nums[j] === nums[j - 1]) j++;
      } else if (sum > 0) k--;
      // If the sum is less than zero, move the left pointer to the right
      else if(sum < 0) j++
    }
  }
  return result;
}

// Step-by-Step Walkthrough:
// Initial Input: [-1, 0, 1, 2, -1, -4]
// Sort the Array:
// JavaScript

// nums.sort((a, b) => a - b);
// AI-generated code. Review and use carefully. More info on FAQ.Sorted array: [-4, -1, -1, 0, 1, 2]
// Initialize Result Array:

// const result = [];
// Iterate through the Array:

// for (let i = 0; i < nums.length - 2; i++) {
// First Iteration (i = 0):
// Current element: nums[0] = -4
// Initialize pointers:

// let left = 1; // nums[1] = -1
// let right = 5; // nums[5] = 2
// While Loop for Two Pointers:

// while (left < right) {
// First Inner Iteration:
// Calculate sum:

// const sum = nums[0] + nums[1] + nums[5]; // -4 + (-1) + 2 = -3
// Since sum < 0, move the left pointer:

// left++; // left = 2
// Second Inner Iteration:
// Calculate sum:

// const sum = nums[0] + nums[2] + nums[5]; // -4 + (-1) + 2 = -3
// Since sum < 0, move the left pointer:

// left++; // left = 3
// Third Inner Iteration:
// Calculate sum:

// const sum = nums[0] + nums[3] + nums[5]; // -4 + 0 + 2 = -2
// Since sum < 0, move the left pointer:

// left++; // left = 4
// Fourth Inner Iteration:
// Calculate sum:

// const sum = nums[0] + nums[4] + nums[5]; // -4 + 1 + 2 = -1
// Since sum < 0, move the left pointer:

// left++; // left = 5
// End of First Iteration: left is no longer less than right, so exit the while loop.
// Second Iteration (i = 1):
// Current element: nums[1] = -1
// Initialize pointers:

// let left = 2; // nums[2] = -1
// let right = 5; // nums[5] = 2
// First Inner Iteration:
// Calculate sum:

// const sum = nums[1] + nums[2] + nums[5]; // -1 + (-1) + 2 = 0
// Since sum === 0, we found a triplet:

// result.push([nums[1], nums[2], nums[5]]); // result = [[-1, -1, 2]]
// Skip duplicates and move pointers:

// while (left < right && nums[left] === nums[left + 1]) left++; // left = 3
// while (left < right && nums[right] === nums[right - 1]) right--; // right = 4
// left++; // left = 3
// right--; // right = 4
// Second Inner Iteration:
// Calculate sum:

// const sum = nums[1] + nums[3] + nums[4]; // -1 + 0 + 1 = 0
// Since sum === 0, we found another triplet:

// result.push([nums[1], nums[3], nums[4]]); // result = [[-1, -1, 2], [-1, 0, 1]]
// Skip duplicates and move pointers:

// while (left < right && nums[left] === nums[left + 1]) left++; // left = 4
// while (left < right && nums[right] === nums[right - 1]) right--; // right = 3
// left++; // left = 4
// right--; // right = 3
// End of Second Iteration: left is no longer less than right, so exit the while loop.
// Third Iteration (i = 2):
// Current element: nums[2] = -1
// Skip duplicate:

// if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip since nums[2] === nums[1]
// Fourth Iteration (i = 3):
// Current element: nums[3] = 0
// Initialize pointers:

// let left = 4; // nums[4] = 1
// let right = 5; // nums[5] = 2
// First Inner Iteration:
// Calculate sum:

// const sum = nums[3] + nums[4] + nums[5]; // 0 + 1 + 2 = 3
// Since sum > 0, move the right pointer:

// right--; // right = 4
// End of Fourth Iteration: left is no longer less than right, so exit the while loop.
// End of Loop: All elements have been processed.
// Return the Result:

// return result; // [[-1, -1, 2], [-1, 0, 1]]
// Final Output:

// [[-1, -1, 2], [-1, 0, 1]]