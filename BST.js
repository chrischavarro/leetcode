class TreeNode {
  constructor(value) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // compare inserted value to current value
  // if greater, traverse to right node
  // if lesser, traverse to left node
  // 
  // O(log n)
  insert(root, val) {
    // if we've reached a leaf node, create and return a new Node
    if (!root) {
      return new TreeNode(val);
    }
    if (val > root.val) {
      root.right = insert(root.right, val);
    } else if (val < root.val) {
      root.left = insert(root.left, val);
    }
    return root;
  }

  find(root, val) {
    if (!root || root.val === val) {
      return root;
    }
    if (val > root.val) {
      return this.find(root.right, val);
    } else if (val < root.val) {
      return this.find(root.left, val);
    }
  }

  findMinNode(root) {
    let current = root;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }
  // O(log n)
  remove(root, val) {
    if (!root) {
      return null;
    }

    if (val > root.val) {
      root.right = remove(root.right, val);
    } else if (val < root.val) {
      root.left = remove(root.left, val);
    } else {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        let minNode = findMinNode(root.right);
        root.val = minNode.val;
        root.right = remove(root.right, minNode.val);
      }
    }
    return root;
  }
}