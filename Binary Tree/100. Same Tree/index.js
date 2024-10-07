// 100. Same Tree
// Solved
// Easy
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value. 

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false
 
// Constraints:

// The number of nodes in both trees is in the range [0, 100].
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// perform dfs on both trees, return true if both reach a leaf node
// return false if either node is null or their values are not equal
// otherwise, recurse on left and right branches of both trees
function isSameTree(p, q) {
  function dfs(node1, node2) {
    if (!node1 && !node2) {
      return true;
    }
    if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    return dfs(node1.left, node2.left) && dfs(node1.right, node2.right);
  }
  return dfs(p, q);
}