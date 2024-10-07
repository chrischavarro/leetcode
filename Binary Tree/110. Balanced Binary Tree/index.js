// 110. Balanced Binary Tree
// Solved
// Easy
// Given a binary tree, determine if it is height-balanced 

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 
// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

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
 * @return {boolean}
 */

// perform dfs on the left and right branches
// if either value is -1, return -1
// if the difference between left and right height exceeds 1- return -1
// otherwise, return height as max between left and right branches plus 1 for current node
// return equality check of dfs on root against -1
function isBalanced(root) {
  function dfs(node) {
    if (!node) {
      return 0;
    }
    let left = dfs(node.left);
    let right = dfs(node.right);
    if (left === -1 || right === -1) {
      return -1;
    }
    if (Math.abs(left - right) > 1) {
      return -1;
    }
    return Math.max(left, right) + 1;
  }
  return dfs(root) !== -1;
}