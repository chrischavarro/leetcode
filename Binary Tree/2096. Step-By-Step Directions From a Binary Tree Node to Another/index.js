// 2096. Step-By-Step Directions From a Binary Tree Node to Another
// Solved
// Medium
// Hint
// You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.

// Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:

// 'L' means to go from a node to its left child node.
// 'R' means to go from a node to its right child node.
// 'U' means to go from a node to its parent node.
// Return the step-by-step directions of the shortest path from node s to node t.

// Example 1:

// Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
// Output: "UURL"
// Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.
// Example 2:

// Input: root = [2,1], startValue = 2, destValue = 1
// Output: "L"
// Explanation: The shortest path is: 2 → 1. 

// Constraints:

// The number of nodes in the tree is n.
// 2 <= n <= 105
// 1 <= Node.val <= n
// All the values in the tree are unique.
// 1 <= startValue, destValue <= n
// startValue != destValue

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
// return directions string when target node is found
// traverse left and right branches with respective direction appended to string
// return the remaining left or right node
function helper(node, val, dirString) {
  // If the current node is null, return an empty string
  if (!node) {
      return '';
  }
  // If the current node's value matches the target value, return the direction string
  if (node.val === val) {
      return dirString;
  }
  // Recursively search the left subtree, appending 'L' to the direction string
  let left = helper(node.left, val, dirString + 'L');
  // Recursively search the right subtree, appending 'R' to the direction string
  let right = helper(node.right, val, dirString + 'R');
  // If the left search did not find the target, return the result of the right search; otherwise, return the left search result
  return left || right;
}

// call helper function to get path for start and end nodes separately
// iterate through shortest path length and identify index where start and end paths diverge
// move up from start node to common ancestor before appending rest of path to destination node
var getDirections = function(root, startValue, destValue) {
  // Find the path from the root to the start node
  let start = helper(root, startValue, '');
  // Find the path from the root to the destination node
  let end = helper(root, destValue, ''); 

  // Determine the length of the shorter path
  let shorter = Math.min(start.length, end.length);
  let i = 0;
  // Find the first differing character in the paths
  for (i = 0; i < shorter; i++) {
      if (start[i] !== end[i]) {
          break;
      }
  }
  // Construct the result by moving up from the start node to the common ancestor, then following the path to the destination node
  return 'U'.repeat(start.length - i) + end.slice(i, end.length);
};


// Step-by-Step Walkthrough
// Helper Function to Find Path:

// function helper(node, val, dirString) {
//     if (!node) {
//         return '';
//     }
//     if (node.val === val) {
//         return dirString;
//     }
//     let left = helper(node.left, val, dirString + 'L');
//     let right = helper(node.right, val, dirString + 'R');
//     return left || right;
// }
// Find Path from Root to Start Node:

// let start = helper(root, startValue, '');
// For startValue = 3:
// Start at root (5): helper(5, 3, '')
// Go left to 1: helper(1, 3, 'L')
// Go left to 3: helper(3, 3, 'LL')
// Path found: 'LL'
// Find Path from Root to Destination Node:

// let end = helper(root, destValue, '');
// For destValue = 6:
// Start at root (5): helper(5, 6, '')
// Go right to 2: helper(2, 6, 'R')
// Go left to 6: helper(6, 6, 'RL')
// Path found: 'RL'
// Determine the Length of the Shorter Path:

// let shorter = Math.min(start.length, end.length);
// let i = 0;
// for (i = 0; i < shorter; i++) {
//     if (start[i] !== end[i]) {
//         break;
//     }
// }
// start = 'LL'
// end = 'RL'
// Compare characters:
// start[0] = 'L', end[0] = 'R' (differ at index 0)
// i = 0
// Construct the Result:

// return 'U'.repeat(start.length - i) + end.slice(i, end.length);
// Move up from start node to the common ancestor:
// 'U'.repeat(2 - 0) = 'UU'
// Follow the path to the destination node:
// end.slice(0, 2) = 'RL'
// Result: 'UURL'
// Final Output

// "UURL"
// Explanation
// The shortest path from node 3 to node 6 is:
// Move up from 3 to 1: 'U'
// Move up from 1 to 5: 'U'
// Move right from 5 to 2: 'R'
// Move left from 2 to 6: 'L'
// Combined path: 'UURL'