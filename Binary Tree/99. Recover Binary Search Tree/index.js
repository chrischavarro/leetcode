// 99. Recover Binary Search Tree
// Solved
// Medium
// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure. 

// Example 1:

// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
// Example 2:

// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
 
// Constraints:

// The number of nodes in the tree is in the range [2, 1000].
// -231 <= Node.val <= 231 - 1

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

function swap(val1, val2) {
  let temp = val1.val;
  val1.val = val2.val;
  val2.val = temp;
}

// set variables to store nodes (node1, node2) to swap as well as previous node explored
// perform dfs on left branch before checking if current value is smaller than previous value
// if so, set node1 to the previous node if it hasn't been set, then set node2 to current node
// set previous node to current node before performing dfs on right branch
// call dfs on root node, then swap values for node1 and node2 before returning root
function recoverTree(root) {
  let prev = null;
  let node1 = null;
  let node2 = null
  function dfs(node) {
    if (!node) {
      return null;
    }
    dfs(node.left);
    if (prev && prev.val >= node.val) {
      if (!node1) {
        node1 = prev;
      }
      node2 = node;
    }
    prev = node;
    dfs(node.right);
  }
  dfs(root);
  swap(node1, node2);
  return root;
}

// Let’s walk through it with the tree [3,1,4,null,null,2].

// During the in-order traversal (which visits nodes in the order left-root-right), the expected sequence of values for a valid BST should be: 1, 3, 2, 4. Here's how our code would work:

// Starting from the root, the traversal visits the left child node first.

// It goes to the leftmost node, which is 1. Since 1 has no left child, it moves up and processes 1. This is our first node in the sequence. prev becomes 1.

// Moving back to the root (3), it processes 3. So now the sequence is 1, 3. prev is updated to 3.

// It then goes to the right child of 3, which is 4. But 4 has a left child 2, so it moves to 2 before processing 4.

// Now it processes 2. The sequence becomes 1, 3, 2. Since 2 is less than prev (3), we identify 3 as first and 2 as second.

// Finally, it moves back and processes 4. The sequence becomes 1, 3, 2, 4. prev is updated to 4.

// The out-of-order nodes are 3 and 2. Swapping their values will recover the tree:

