// Create a Min Heap class with insert, pop, peek methods

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // push value to end of heap array
  // set index at end of heap array
  // while index exceeds 1 and the parent is larger than the child
    // swap parent and child based on indexes
    // set index to that of parent ((i - 1) / 2)
  insert(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[i] < this.heap[Math.floor((i - 1) / 2)]) {
        this.swap(i, Math.floor((i - 1) / 2));
        i = Math.floor((i - 1) / 2);
    }
  }

  // return null or popped element if heap is empty or has 1 element
  // otherwise, get first element in array before reassigning that index to the popped element
  // call heapify down and then return the original root
  pop() {
    if (!this.heap.length) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  // set heap to provided nums array
  // set current index at middle of array
  // while index equals or exceeds 0, heapify down and decrement index
  heapify(nums) {
    this.heap = nums;
    let current = Math.floor((this.heap.length - 1) / 2);
    while (current >= 0) {
      this.heapifyDown(current);
      current--;
    }
  }


  // set index as provided value or 0
  // while left child exists in the heap
    // get index of left and right child
    // smallIndex should point to the smallest child value 
    // if right child index exists and its node value exceeds left child
      // set left child index as right child index
    // if left child equals or exceeds current/parent value break loop
    // otherwise, swap parent and left child based on indexes
    // finally, set index to left child
  heapifyDown(index = null) {
    let i = index || 0;
    while (i * 2 + 1 < this.heap.length) {
      let smallIndex = i * 2 + 1;
      let largeIndex = i * 2 + 2;
      if (largeIndex < this.heap.length && this.heap[largeIndex] < this.heap[smallIndex]) {
        smallIndex = largeIndex;
      }
      if (this.heap[i] <= this.heap[smallIndex]) {
        break;
      }
      this.swap(i, smallIndex);
      i = smallIndex;
    }
  }

  peek() {
    return this.heap.length ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }
}

function heapifyDown(index, arr) {
  let i = index;
  while (i * 2 + 1 < arr.length) {
    let leftIndex = i * 2 + 1;
    let rightIndex = i * 2 + 2;
    if (rightIndex < arr.length && arr[rightIndex] < arr[leftIndex]) {
      leftIndex = rightIndex;
    }
    if (arr[i] <= arr[leftIndex]) {
      break;
    }
    let temp = arr[i];
    arr[i] = arr[leftIndex];
    arr[leftIndex] = temp;
    i = leftIndex;
  }
  return arr;
}

function convertArrayToHeap(arr) {
  let current = Math.floor((arr.length - 1) / 2);
  let result;
  while (current >= 0) {
    result = heapifyDown(current, arr);
    current--;
  }
  return result;
}