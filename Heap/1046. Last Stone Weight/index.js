// 1046. Last Stone Weight
// Solved
// Easy

// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
// Example 2:

// Input: stones = [1]
// Output: 1

// Constraints:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */

class MaxHeap {
  constructor() {
      this.heap = [];
  }

  // Helper method to get the parent index
  getParentIndex(index) {
      return Math.floor((index - 1) / 2);
  }

  // Helper method to get the left child index
  getLeftChildIndex(index) {
      return 2 * index + 1;
  }

  // Helper method to get the right child index
  getRightChildIndex(index) {
      return 2 * index + 2;
  }

  // Method to swap two elements in the heap
  swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Method to insert a new value into the heap
  insert(value) {
      this.heap.push(value);
      this.heapifyUp();
  }

  // Method to maintain the heap property after insertion
  heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
          let parentIndex = this.getParentIndex(index);
          if (this.heap[parentIndex] < this.heap[index]) {
              this.swap(parentIndex, index);
              index = parentIndex;
          } else {
              break;
          }
      }
  }

  // Method to remove and return the maximum value from the heap
  extractMax() {
      if (this.heap.length === 0) {
          return null;
      }
      if (this.heap.length === 1) {
          return this.heap.pop();
      }
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return max;
  }

  // Method to maintain the heap property after extraction
  heapifyDown() {
      let index = 0;
      while (this.getLeftChildIndex(index) < this.heap.length) {
          let largerChildIndex = this.getLeftChildIndex(index);
          let rightChildIndex = this.getRightChildIndex(index);
          if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largerChildIndex]) {
              largerChildIndex = rightChildIndex;
          }
          if (this.heap[index] < this.heap[largerChildIndex]) {
              this.swap(index, largerChildIndex);
              index = largerChildIndex;
          } else {
              break;
          }
      }
  }

  // Method to get the maximum value without removing it
  peek() {
      return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
      return this.heap.length;
  }
}

// create and populate a maxheap with the array of stones
// pop two largest values from maxheap while heap size exceeds 1
// if stone values aren't equal, insert absolute difference to the heap
// return the maximum value in the heap or 0 if no stones remain
function lastStoneWeight(stones) {
  let heap = new MaxHeap();
  for (let stone of stones) {
    heap.insert(stone);
  }
  while (heap.size() > 1) {
    let stone1 = heap.extractMax();
    let stone2 = heap.extractMax();
    if (stone1 !== stone2) {
      heap.insert(Math.abs(stone2 - stone1));
    }
  }
  return heap.peek() || 0;
}