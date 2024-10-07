// 101. Symmetric Tree
// Solved
// Easy

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center). 

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false
 
// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

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

// perform dfs on left and right branches
// if both nodes are null, return true
// if one node is null or the values are not equal, return false
// otherwise, perform dfs on left's left and right's right AND left's right and right's left
// initiate dfs on left and right branches of root node
function isSymmetric(root) {
  function dfs(left, right) {
    if (!left && !right) {
      return true;
    }
    if (!left || !right || left.val !== right.val) {
      return false;
    }
    return dfs(left.left, right.right) && dfs(left.right, right.left);
  }
  return dfs(root.left, root.right);
}