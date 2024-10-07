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


// Iterative
function preOrderTraversal(root, arr) {
  const stack = [];
  const result = [];
  while (root || stack.length) {
    if (root) {
      result.push(root.val);
      if (root.right) {
        stack.push(root.right)
      }
      root = root.left;
    } else {
      root = stack.pop();
    }
  }
}

// navigate tree recursively starting with left branch followed by right branch
// push value to result array before traversing both branches 
// return when end of branch is reached

// Recursive - no helper function
var preorderTraversal = function (root, arr = []) {
  if (!root) {
    return arr;
  }
  arr.push(root.val);
  return preorderTraversal(root.left, arr) && preorderTraversal(root.right, arr);
};

// Helper method recursion
var preorderTraversal = function (root) {
  const tree = [];
  function preorder(node, arr) {
    if (!node) {
      return;
    }
    arr.push(node.val);
    preorder(node.left);
    preorder(node.right);
  }
  preorder(root, tree);
  return tree;
};
