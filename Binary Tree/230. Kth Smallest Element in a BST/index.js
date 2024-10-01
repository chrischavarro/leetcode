// 230. Kth Smallest Element in a BST
// Solved
// Medium
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104
 

// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

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
 * @param {number} k
 * @return {number}
 */
// ITERATIVE SOLUTION
// create a stack and counter to keep track of nodes and their order
// traverse tree inorder, adding node to stack before traversing to left child
// then pop node from stack, increment counter, and return node value if counter equals k
// otherwise, traverse to right node;
function kthSmallest(root, k) {
  const stack = [];
  let counter = 0;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    counter++
    if (counter === k) {
      return root.val;
    }
    root = root.right;
  }
}

// RECURSIVE SOLUTION
// create an array to store the node values
// traverse inorder and push current node value to the array
// return k-1 index of result array
function kthSmallest(root, k) {
  const result = [];
  function dfs(node) {
    if (!node) {
      return Infinity;
    }
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  return result[k - 1];
}