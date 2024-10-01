// 145. Binary Tree Postorder Traversal
// Solved
// Easy

// Given the root of a binary tree, return the postorder traversal of its nodes' values.
 
// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,6,7,5,2,9,8,3,1]

// Example 3:
// Input: root = []
// Output: []

// Example 4:
// Input: root = [1]
// Output: [1]

// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

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

// create two stacks to store nodes in order, first stack is populated with root node
// pop node from first stack, add left and right children to first stack, then push current node to second stack
// pop node from second stack and add its value to result array
function postorderTraversal(root) {
  const result = [];
  let s1 = [root];
  let s2 = [];
  while (s1.length) {
    root = s1.pop();
    if (root) {
      s1.push(root.left);
      s1.push(root.right);
    }
    s2.push(root);
  }
  while (s2.length) {
    root = s2.pop();
    if (root) {
      result.push(root.val);
    }
  }
  return result;
}