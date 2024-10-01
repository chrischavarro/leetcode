/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// one node we create will contain the sum, the other that we'll return at the end points to the first digit of the sum
// traverse both lists as long as one is pointing to a number or we still have a remainder
// add the sum of one or both nodes along with any remainder to the next sum node 
function addNums(l1, l2) {
  let head = new ListNode();
  let current = new ListNode();
  let remainder = 0;
  while (l1 || l2 || remainder) {
    let sum = remainder;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    remainder = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return head.next;
}


var addTwoNumbers = function(l1, l2) {
  const head = new ListNode();
  const current = new ListNode();
  let remainder = 0;

  while (l1 || l2 || remainder) {
    let sum = remainder;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    remainder = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return head.next;
}
