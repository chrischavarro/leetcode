// example input: [10, 12, 25, 30, 15, 36]
// example output: { val: 25, next: 12, prev: null }, { val: 12, next: 30, prev: 25 }, { val: 30, next: 10, prev: 12 }, { }
// when traversing on left node, the parent node will point to it as its prev value
// left node will point to the parent node as its next value
// when traversing on right node, parent node will poitn to it as its next value
// right node will point to parent node as its previous value
// try to solve the problme on the left subtree, and try to solve the problem on the right subtree
// problem to solve - convert bt to dll
// assuming you 



function btToDll(root) {
  if (!root) {
    return null;
  }
  let left = btToDll(root.left)
  let right = btToDll(root.right)
  
  return combineLists(left, root, right);
// and you solve btToDll for root.right, how can you combine the solutions?
// 
}

// find the max value on th

function getMax(left, right, root) {
  return Math.max(left, right, root.val);
}

function findMaxValue(root) {
  if (!root) {
    return -Infinity;
  }
  let leftMax = findMaxValue(root.left);
  let rightMax = findMaxValue(root.right);

  return getMax(leftMax, rightMax, root);
}

function findMaxBST(root) {
  if (!root) {
    return -Infinity;
  }
  let rightMax = findMaxValue(root.right);

  return getMax(rightMax, root);
}

function combineValues(left, right, root, target) {
  return left || right || root;
}

function findValueInBT(root, target) {
  if (!root) {
    return null;
  }
  let leftValue = findValueInBT(root.left, target);
  let rightValue = findValueInBT(root.right, target);
  
  return combineValues(leftValue, rightValue, root, target);
}

function combineAllValues(left, right, root, target) {
  const result = [...left, ...right]
  if (root.val === target) {
    result.push(root);
  }
  return result;
}

// output type is [node]
function findAllValuesOfBT(root, target) {
  if (!root) {
    return [];
  }
  let leftValues = findAllValuesOfBT(root.left, target);
  let rightValues = findAllValuesOfBT(root.right, target);

  return combineAllValues(leftValues, rightValues, root, target);
}

// output type is node
function findValueOfBST(root, target) {
  if (!root) {
    return null;
  }
  if (root.val === target) {
    return root;
  }
  if (root.val > target) {
    return findValueOfBST(root.left, target)
  }
  if (root.val < target) {
    return findValueOfBST(root.right, target);
  }
}