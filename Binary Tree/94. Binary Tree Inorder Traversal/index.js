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
 * @return {number[]}
 */

// ITERATIVE
// create a stack to keep track of nodes that have been explored
// explore left branch, add current node to stack and traverse to left child
// after left node is traversed, pop current node from stack, push value to result, traverse to right child
function inOrderTraversal(root) {
  const result = [];
  const stack = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
}


// RECURSIVE
// traverse the left branch, push the current value to results array, then traverse the right branch
// return result array at end of recursive call
function inorderTraversal(root, arr = []) {
  if (!root) {
      return arr;
  }
  inorderTraversal(root.left, arr);
  arr.push(root.val);
  inorderTraversal(root.right, arr);
  return arr;
}
