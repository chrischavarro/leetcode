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
// keep track of max diameter as we calculate the height of the root
// height is recursively calculated as the max of left and right height
// diameter at each node is equal to the sum of the left and right height
// 
// return max diameter; 
var diameterOfBinaryTree = function(root) {
  const max = 0;
  function height(node) {
    if (!node) return 0;
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    let diameter = leftHeight + rightHeight
    max = Math.max(max, diameter);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  height(root);

  return max;
}