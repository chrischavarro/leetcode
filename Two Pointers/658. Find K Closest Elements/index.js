// 658. Find K Closest Elements
// Solved
// Medium
// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b
 
// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]
 
// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

// perform binary search to find the element closest to x
// set pointers at closest value index and the one preceding it
// iterate while k exceeds 0, decrementing at every iteration
// decrement low pointer if right pointer is at end of the array or absolute difference between left value and x is less than right value and x
// otherwise, increment right pointer
// return array slice from value following left pointer to right pointer
// Time complexity: O(log k + k)
// Space complexity: O(k)
function findClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let low = left - 1;
  let high = left;
  while (k > 0) {
    if (high >= arr.length || Math.abs(left - x) <= Math.abs(right - x)) {
      low++;
    } else {
      high++;
    }
    k--;
  }

  return arr.slice(low + 1, right);
}

// Initial Input

// arr = [1, 2, 3, 4, 5]
// k = 4
// x = 3
// Step-by-Step Walkthrough
// Binary Search to Find the Closest Position:

// let left = 0, right = arr.length - 1;
// while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] < x) {
//         left = mid + 1;
//     } else {
//         right = mid;
//     }
// }
// Initial values: left = 0, right = 4
// First iteration:
//    mid = Math.floor((0 + 4) / 2) = 2
//    arr[mid] = arr[2] = 3, which is not less than x, so right = mid = 2
// Second iteration:
//    mid = Math.floor((0 + 2) / 2) = 1
//    arr[mid] = arr[1] = 2, which is less than x, so left = mid + 1 = 2
//    The loop exits with left = 2, right = 2
// Initialize Two Pointers:

// let low = left - 1, high = left;
// low = 2 - 1 = 1
// high = 2
// Expand the Window to Find the k Closest Elements:

// while (k > 0) {
//     if (low < 0) {
//         high++;
//     } else if (high >= arr.length || Math.abs(arr[low] - x) <= Math.abs(arr[high] - x)) {
//         low--;
//     } else {
//         high++;
//     }
//     k--;
// }
// Initial values: low = 1, high = 2, k = 4
// First iteration:
//    Math.abs(arr[1] - 3) = Math.abs(2 - 3) = 1
//    Math.abs(arr[2] - 3) = Math.abs(3 - 3) = 0
//    Since Math.abs(arr[1] - 3) > Math.abs(arr[2] - 3), high++, high = 3, k = 3
// Second iteration:
//    Math.abs(arr[1] - 3) = 1
//    Math.abs(arr[3] - 3) = Math.abs(4 - 3) = 1
//    Since Math.abs(arr[1] - 3) <= Math.abs(arr[3] - 3), low--, low = 0, k = 2
// Third iteration:
//    Math.abs(arr[0] - 3) = Math.abs(1 - 3) = 2
//    Math.abs(arr[3] - 3) = 1
//    Since Math.abs(arr[0] - 3) > Math.abs(arr[3] - 3), high++, high = 4, k = 1
// Fourth iteration:
//    Math.abs(arr[0] - 3) = 2
//    Math.abs(arr[4] - 3) = Math.abs(5 - 3) = 2
//    Since Math.abs(arr[0] - 3) <= Math.abs(arr[4] - 3), low--, low = -1, k = 0
// Collect and Sort the Result:
//    return arr.slice(low + 1, high).sort((a, b) => a - b);
//    low + 1 = -1 + 1 = 0
//    arr.slice(0, 4) = [1, 2, 3, 4]
//    The array is already sorted, so the final result is [1, 2, 3, 4]
//    Final Output
// [1, 2, 3, 4]