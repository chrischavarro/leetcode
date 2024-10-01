// 763. Partition Labels
// Solved
// Medium

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

 

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number[]}
 */
// create a map to store the last index of each character
// create an empty array to store the partition sizes
// traverse string, setting value of partition end pointer to the max of its current value and the index of the current character in the string
// if partition end pointer and current index are equal, push length between two pointers + 1 to result array and set partition start pointer ahead of end pointer
var partitionLabels = function(s) {
  let map = new Map();
  let start = 0;
  let end = 0;
  let result = [];
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i)
  }
  for (let r = 0; r < s.length; r++) {
    end = Math.max(end, map.get(s[r]));
    if (r === end) {
      result.push(r);
      start + end + 1;
    }
  }
  return result;
}

// Step-by-Step Walkthrough
// Create a Map to Store the Last Occurrence of Each Character:

// s = "ababcbacadefegdehijhklij"

// let map = new Map();
// for (let i = 0; i < s.length; i++) {
//     map.set(s[i], i);
// }
// After this loop, map will contain:
// {
//   'a' => 8,
//   'b' => 5,
//   'c' => 7,
//   'd' => 14,
//   'e' => 15,
//   'f' => 11,
//   'g' => 13,
//   'h' => 19,
//   'i' => 22,
//   'j' => 23,
//   'k' => 20,
//   'l' => 21
// }

// This map helps us know the last position of each character in the string.
// Initialize Variables:

// let start = 0;
// let end = 0;
// const result = [];
// Iterate Through the String to Determine Partitions:

// for (let r = 0; r < s.length; r++) {
//     end = Math.max(end, map.get(s[r]));
//     if (r === end) {
//         result.push(end - start + 1);
//         start = end + 1;
//     }
// }
// First Iteration (r = 0):
// s[0] = 'a'
// end = Math.max(0, map.get('a')) = Math.max(0, 8) = 8
// Second Iteration (r = 1):
// s[1] = 'b'
// end = Math.max(8, map.get('b')) = Math.max(8, 5) = 8
// Third Iteration (r = 2):
// s[2] = 'a'
// end = Math.max(8, map.get('a')) = Math.max(8, 8) = 8
// Continue Iterating:
// This process continues, updating end to the maximum last occurrence of the characters seen so far.
// When r Reaches 8:
// r = 8
// end = 8
// Since r === end, we have found a partition:

// result.push(8 - 0 + 1); // result = [9]
// start = 8 + 1; // start = 9
// Next Iterations:
// Iteration (r = 9 to 14):
// end is updated to 15 (last occurrence of ‘e’).
// When r reaches 15:

// result.push(15 - 9 + 1); // result = [9, 7]
// start = 15 + 1; // start = 16
// Iteration (r = 16 to 23):
// end is updated to 23 (last occurrence of ‘j’).
// When r reaches 23:

// result.push(23 - 16 + 1); // result = [9, 7, 8]
// start = 23 + 1; // start = 24
// Return the Result:

// return result; // [9, 7, 8]
// The string is partitioned into "ababcbaca", "defegde", and "hijhklij".
