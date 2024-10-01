// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// Solved
// Medium

// Example 1:

// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
// Example 2:

// Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
// Output: 6
// Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.

// Constraints:

// 1 <= arr.length <= 105
// 1 <= arr[i] <= 104
// 1 <= k <= arr.length
// 0 <= threshold <= 104

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
// traverse array, adding current value to sum and recalculating average
// if window size exceeds k, decrement left value from sum and increment pointer
// if window size equals k and average meets and exceeds threshold, increment count
var numOfSubarrays = function(arr, k, threshold) {
  let count = 0;
  let sum = 0;
  let average = 0;
  let l = 0;
  for (let r = 0; r < arr.length; r++) {
    if (r = l + 1 > k) {
      sum -= arr[l];
      l++;
    }
    sum += arr[r];
    average = sum / k;
    if (r - l + 1 === k && average >= threshold) count++;
  }
  return count;
}