/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// create a set to track nodes that have been visited
// cycle is found when node exists in set
// cycle is broken when tail node is reached

// Set implementation
var hasCycle = function(head) {
  let current = head;
  const visited = new Set();
  while (current) {
    if (visited.has(current)) return true;
    visited.add(current);
    current = current.next;    
  };
  return false;
}

// use a slow and fast pointer to go through list at two different speeds
// cycle doesn't exist if the fast pointer reaches an end
// cycle is found if the fast and slow pointers reach the same value
var hasCycle = function(head) {
  if (!head || !head.next) return false;
  let p1 = head;
  let p2 = head.next;
  while (p2 && p2.next) {
    if (p1 === p2) return true;
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return false;
}