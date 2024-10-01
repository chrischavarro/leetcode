// 23. Merge k Sorted Lists
// Solved
// Hard

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 
// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class MinHeap {
  constructor() {
      this.heap = [];
  }

  // Helper method to get the index of the parent node
  getParentIndex(index) {
      return Math.floor((index - 1) / 2);
  }

  // Helper method to get the index of the left child
  getLeftChildIndex(index) {
      return 2 * index + 1;
  }

  // Helper method to get the index of the right child
  getRightChildIndex(index) {
      return 2 * index + 2;
  }

  // Helper method to swap two elements in the heap
  swap(index1, index2) {
      const temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
  }

  // Method to insert a new element into the heap
  insert(value) {
      this.heap.push(value);
      this.heapifyUp();
  }

  // Helper method to maintain the min-heap property after insertion
  heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]) {
          this.swap(index, this.getParentIndex(index));
          index = this.getParentIndex(index);
      }
  }

  // Method to remove and return the minimum element (root) from the heap
  remove() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
      
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return root;
  }

  // Helper method to maintain the min-heap property after removal
  heapifyDown() {
      let index = 0;
      while (this.getLeftChildIndex(index) < this.heap.length) {
          let smallerChildIndex = this.getLeftChildIndex(index);
          if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]) {
              smallerChildIndex = this.getRightChildIndex(index);
          }

          if (this.heap[index] <= this.heap[smallerChildIndex]) {
              break;
          }

          this.swap(index, smallerChildIndex);
          index = smallerChildIndex;
      }
  }

  // Method to get the minimum value (root) without removing it
  peek() {
      return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Method to check if the heap is empty
  isEmpty() {
      return this.heap.length === 0;
  }

  // Method to get the size of the heap
  size() {
      return this.heap.length;
  }
}

// create a ListNode to represent merged linked list and a head value pointing to the initial node
// iterate through array of linked lists, inserting each value to min heap and iterating to the next node
// pop smallest element from heap, assign as the value of the next new node, then navigate to next node
// return the head's next node since head value is initialied as 0
function mergeKLists(lists) {
  let heap = new MinHeap();
  let list = new ListNode();
  let head = list;
  for (let list of lists) {
    while (list) {
      heap.insert(list.val);
      list = list.next;
    }
  }
  while (heap.size()) {
    list.next = new ListNode(heap.remove());
    list = list.next;
  }
  return head.next;
}