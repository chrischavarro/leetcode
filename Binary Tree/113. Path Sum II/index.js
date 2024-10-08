// 113. Path Sum II
// Solved
// Medium
// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children. 

// Example 1:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Explanation: There are two paths whose sum equals targetSum:
// 5 + 4 + 11 + 2 = 22
// 5 + 8 + 4 + 5 = 22
// Example 2:

// Input: root = [1,2,3], targetSum = 5
// Output: []
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: [] 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

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
 * @param {number} targetSum
 * @return {number[][]}
 */

// keep track of paths in a results array
// perform dfs and pass along a path array and current sum
// push current node val to path and add it to current sum
// if current node is a leaf and sum equals current sum, push shallow copy of path to results array
// perform dfs on left and right branches before popping from array to backtrack up the tree
// call dfs on root node with initial empty array of sum of 0
function pathSum(root, targetSum) {
  const result = [];
  function dfs(node, arr, sum) {
    if (!node) {
      return null;
    }
    arr.push(node.val);
    sum += node.val;
    if (!node.left && !node.right && sum === targetSum) {
      result.push([...arr]);
    }
    dfs(node.left, arr, sum);
    dfs(node.right, arr, sum);
    arr.pop();
  }
  dfs(root, [], 0);
  return result;
}