// 986. Interval List Intersections
// Solved
// Medium

// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

// Example 1:

// Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
// Example 2:

// Input: firstList = [[1,3],[5,9]], secondList = []
// Output: []
 
// Constraints:

// 0 <= firstList.length, secondList.length <= 1000
// firstList.length + secondList.length >= 1
// 0 <= starti < endi <= 109
// endi < starti+1
// 0 <= startj < endj <= 109 
// endj < startj+1

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */

function checkIntervals(arr1, arr2) {
  return arr1[1] <= arr2[1] || arr1[1] >= arr2[1];
}

// iterate across both lists, incrementing the pointer on the one with smallest end value
// if end of one interval is larger or equal to the other end, get the largest min and smallest max from both intervals and push to result
var intervalIntersection = function(firstList, secondList) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < firstList.length && j < secondList.length) {
    if (checkIntervals(firstList[i], secondList[j])) {
      let min = Math.max(firstList[i][0], secondList[j][0]);
      let max = Math.min(firstList[i][1], secondList[j][1]);
      if (max > min) {
        result.push([min, max]);
      }
    }
    if (firstList[1][1] > secondList[j][1]) {
      j++
    } else {
      i++;
    }
  }

  return result;
}