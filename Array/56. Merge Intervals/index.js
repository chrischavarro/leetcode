// 56. Merge Intervals
// Solved
// Medium
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping. 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// sort intervals in ascending order
// store merged intervals in results array
// traverse intervals array, push interval if:
// - results array is empty 
// - there is no overlap between last interval in results array and current interval
// overlap if second value in results interval is greater than or equal to either value in current interval
// if overlap exists, calculate min and max values from popped results array interval and current interval and push values as new interval to results array  
function checkForOverlap(arr1, arr2) {
  return arr1[1] >= arr2[0] || arr1[1] >= arr2[1]
}

function mergeIntervals(intervals) {
  const result = [];
  let sorted = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    if (!result.length || result.length && !checkForOverlap(result[result.length - 1], sorted[i])) {
      result.push(sorted[i]);
    } else if (checkForOverlap(result[result.length - 1], sorted[i])) {
      let resultInterval = result.pop();
      let min = Math.min(resultInterval[0], sorted[i][0]);
      let max = Math.max(resultInterval[1], sorted[i][1]);
      result.push([min, max]);
    }
  }
  return result;
}