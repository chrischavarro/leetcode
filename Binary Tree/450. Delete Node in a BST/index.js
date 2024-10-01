// 450. Delete Node in a BST
// Solved
// Medium
// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
 
// Example 1:

// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

// Example 2:

// Input: root = [5,3,6,2,4,null,7], key = 0
// Output: [5,3,6,2,4,null,7]
// Explanation: The tree does not contain a node with value = 0.
// Example 3:

// Input: root = [], key = 0
// Output: []
 
// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -105 <= Node.val <= 105
// Each node has a unique value.
// root is a valid binary search tree.
// -105 <= key <= 105
 
// Follow up: Could you solve it with time complexity O(height of tree)?

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
 * @param {number} key
 * @return {TreeNode}
 */

function findMinNode(root) {
  let current = root;
  while (current && current.left) {
    current = current.left;
  }
  return current;
}

// if node doesn't exist, return null
// if value is greater, recurse on right child
// if value is lesser, recurse on left child
// if target is found, check whether left or right child is null
// if either or both are null, point to remaining child or null value
// if neither child is null, find smallest value on right subtree
// then, replace root value with smallest value
// finally, recursively delete smallest node on right subtree
function deleteNode(root, val) {
  if (!root) {
    return null;
  }
  if (val > root.val) {
    root.right = deleteNode(root.right, val);
  } else if (val < root.val) {
    root.left = deleteNode(root.left, val);
  } else {
    // handle case where target node has 0 or 1 child
    // return the branch where the child is located
    // if there is no child, we return null and remove target
    if (!root.left) {
      return root.right
    } else if (!root.right) {
      return root.left;
    } else {
      // handle case where target has 2 children
      // find smallest value on right subtree
      // replace target value with smallest value
      // recursively delete smallest value on right subtree
      let minNode = findMinNode(root.right);
      root.val = minNode.val;
      root.right = deleteNode(root.right, minNode.val);
    }
  }
  return root;
}