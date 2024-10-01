// 76. Minimum Window Substring
// Solved
// Hard

// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 
// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 
// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// create a histogram for string 't' to track character frequency
// expand the sliding window 
// as we modify the window, we update the histogram of the window 
// keep track of the minimum size of the valid window
// while the window is valid, we contract the window from the left

function createHistogram(s) {
  let histogram = new Map();
  for (let char of s) {
      histogram.set(char, 1 + (histogram.get(char) || 0))
  }
  return histogram;
}

function validateWindow(sWindow, tWindow, l, r) {
  let testVal;
  if (sWindow.size !== tWindow.size) {
      return false
  }
  for (let [key, val] of sWindow) {
      testVal = tWindow.get(key);
      if (testVal > val || (testVal === undefined && !tWindow.has(key) )) {
          return false
      }
  }
  return true
}

function getSubstring(s, l, r) {
  return s.substring(l, r + 1)
}

var minWindow = function(s, t) {
  let t_histogram = createHistogram(t);
  let w_histogram = new Map();
  let l = 0;
  let minLength = Infinity;
  let minString = ''
  for (let r = 0; r < s.length; r++) {
      if (t_histogram.has(s[r])) {
          w_histogram.set(s[r], 1 + (w_histogram.get(s[r])|| 0))
      }
      while (validateWindow(w_histogram, t_histogram, l, r)) {
          if (minLength > r - l + 1) {
              minLength = r - l + 1;
              minString = getSubstring(s, l, r)
          }
          if (w_histogram.has(s[l])) {
              w_histogram.set(s[l], w_histogram.get(s[l]) - 1);
          }
          l++;
      }
  }
  return minString;
};