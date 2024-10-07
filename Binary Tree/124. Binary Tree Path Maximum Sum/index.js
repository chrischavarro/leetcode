// 124. Binary Tree Maximum Path Sum
// Hard
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path. 

// Example 1:

// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
// Example 2:

// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 
// Constraints:

// The number of nodes in the tree is in the range [1, 3 * 104].
// -1000 <= Node.val <= 1000

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
 * @return {number}
 */


// perform dfs on left and right branches, taking the max positive value from each side
// add left and right maxes to current node value to get current sum
// recalculate max between current max and current sum
// return current node and largest between left and right branch to move back up to parent node
// call dfs on root and return max
function maxPathSum(root) {
  let max = -Infinity;
  function dfs(node) {
    if (!node) {
      return null;
    }
    let left = Math.max(dfs(node.left), 0);
    let right = Math.max(dfs(node.right), 0);
    let sum = left + right + node.val;
    max - Math.max(sum, max);
    return node.val + Math.max(left, right);
  }
  dfs(root);
  return max;
}

`Lets break down the solution step by step using the input tree [-10,9,20,null,null,15,7].
The tree looks like this:

Copy
      -10
      /  \
     9    20
         /  \
        15   7
Step-by-Step Execution:
1. Initialize:
  maxSum = -Infinity
2. Start at the Root:
  Current node: -10
  Call dfs(-10)
3. DFS on Node -10:
  Calculate the maximum path sum for the left subtree.
  Call dfs(9)
4. DFS on Node 9:
  Both left and right children are null, so return 0 for both.
  leftMax = 0
  rightMax = 0
  currentSum = 9 + 0 + 0 = 9
  Update maxSum: maxSum = max(-Infinity, 9) = 9
  Return 9 + max(0, 0) = 9
5. Back to Node -10:
  leftMax = 9
  Calculate the maximum path sum for the right subtree.
  Call dfs(20)
6. DFS on Node 20:
  Calculate the maximum path sum for the left subtree.
  Call dfs(15)
7. DFS on Node 15:
  Both left and right children are null, so return 0 for both.
  leftMax = 0
  rightMax = 0
  currentSum = 15 + 0 + 0 = 15
  Update maxSum: maxSum = max(9, 15) = 15
  Return 15 + max(0, 0) = 15
8. Back to Node 20:
  leftMax = 15
  Calculate the maximum path sum for the right subtree.
  Call dfs(7)
9. DFS on Node 7:
  Both left and right children are null, so return 0 for both.
  leftMax = 0
  rightMax = 0
  currentSum = 7 + 0 + 0 = 7
  Update maxSum: maxSum = max(15, 7) = 15
  Return 7 + max(0, 0) = 7
10. Back to Node 20:
  rightMax = 7
  currentSum = 20 + 15 + 7 = 42
  Update maxSum: maxSum = max(15, 42) = 42
  Return 20 + max(15, 7) = 35
11. Back to Node -10:
  rightMax = 35
  currentSum = -10 + 9 + 35 = 34
  Update maxSum: maxSum = max(42, 34) = 42
  Return -10 + max(9, 35) = 25

Final Result:
The maximum path sum in the tree is 42, which corresponds to the path 15 -> 20 -> 7.`