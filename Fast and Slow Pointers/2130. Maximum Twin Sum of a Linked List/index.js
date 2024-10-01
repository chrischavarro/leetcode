/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// find the middle of the linked list, then reverse either half and traverse both halves
// calculate max sum of current value of each list until we reach the end
function maxSum(head) {
  let slow = head;
  let fast = head;
  let previous = null;
  let max = 0;
  while (fast && fast.next) {
    fast = fast.next.next;
    let following = slow.next;
    slow.next = previous;
    previous = slow;
    slow = following;
  }
  while (slow) {
    max = Math.max(max, slow.val + previous.val);
    slow = slow.next;
    previous = previous.next;
  }
  return max;
}


var pairSum = function(head) {
  let fast = head;
  let slow = head;
  let max = 0;
  let previous = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    let following = slow.next;
    slow.next = previous;
    previous = slow;
    slow = following;
  }
  while (slow) {
    max = Math.max(max, slow.val + previous.val);
    slow = slow.next;
    previous = previous.next;
  }

  return max;
}