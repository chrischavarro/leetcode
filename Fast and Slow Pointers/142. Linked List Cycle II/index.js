/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// use fast and slow pointers to navigate linked list until fast reaches an end or both pointers meet at the same node
// once both pointers meet, set a new pointer at head of list and increment it along with slow pointer until they meet 
var detectCycle = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (!fast || !fast.next) return null;
  let slow2 = head;
  while (slow !== slow2) {
    slow = slow.next;
    slow2 = slow2.next;
  }
  return slow2;
}