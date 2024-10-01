// 973. K Closest Points to Origin
// Solved
// Medium

// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// Example 1:


// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 
// Constraints:

// 1 <= k <= points.length <= 104
// -104 <= xi, yi <= 104

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
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

  getDistance(index) {
      return Math.sqrt(Math.pow(this.heap[index][0], 2) + Math.pow(this.heap[index][1], 2))
  }

  // Helper method to maintain the min-heap property after insertion
  heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0 && this.getDistance(index) < this.getDistance(this.getParentIndex(index))) {
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
          if (this.getRightChildIndex(index) < this.heap.length && this.getDistance(this.getRightChildIndex(index)) < this.getDistance(smallerChildIndex)) {
              smallerChildIndex = this.getRightChildIndex(index);
          }

          if (this.getDistance(index) <= this.getDistance(smallerChildIndex)) {
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

// create a min heap that will store the points arrays sorted by their distance
// heap class needs to be modified to store array but calculate min based on distance
// pop min elements from heap and push to results array until we reach k
function kClosest(points, k) {
  let heap = new MinHeap();
  const result = [];
  for (let point of points) {
    heap.insert(point);
  };
  for (let i = 0; i < k; i++) {
    result.push(heap.remove());
  }
  return result;
}