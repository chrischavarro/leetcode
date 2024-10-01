// 215. Kth Largest Element in an Array
// Solved
// Medium

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 
// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

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

// create a minheap, keep the size no larger than k
// insert num into heap and remvoe from heap if size is exceeded
// return the min element once nums array is traversed
function findKthLargest(nums, k) {
  let heap = new MinHeap();
  for (let num of nums) {
    heap.insert(num);
    if (heap.size() > k) {
      heap.remove();
    }
  }
  return heap.peek();
}