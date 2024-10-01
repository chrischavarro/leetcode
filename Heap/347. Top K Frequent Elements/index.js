// 347. Top K Frequent Elements
// Solved
// Medium

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 
// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
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
      while (index > 0 && this.heap[index][1] < this.heap[this.getParentIndex(index)][1]) {
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
          if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)][1] < this.heap[smallerChildIndex][1]) {
              smallerChildIndex = this.getRightChildIndex(index);
          }

          if (this.heap[index][1] <= this.heap[smallerChildIndex][1]) {
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

// create and populate a frequency map for values in array
// create a min heap
// insert value and frequency arrays into heap, pop when heap size exceeds k
// pop remaining elements from heap and push into results array
function topKFrequent(nums, k) {
  let heap = new MinHeap();
  let map = new Map();
  const result = [];
  for (let num of nums) {
    map.set(num, 1 + (map.get(num) || 0));
  }
  for (let entry of map.entries()) {
    heap.insert(entry);
    if (heap.size() > k) {
      heap.remove();
    }
  }
  while (heap.size()) {
    result.push(heap.remove()[0]);
  }
  return result;
}