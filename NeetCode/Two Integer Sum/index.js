class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  // find two values on each end of the array that matches target
  // move pointers left and right depending on whether sum is larger or smaller than target
  twoSum(numbers, target) {
    const solution = [];
    for (let i = 0; j = numbers.length - 1; i < j) {
      if (numbers[i] + numbers[j] === target) return [[i], [j]]
      if (numbers[i] + numbers[j] > target) j--;
      if (numbers[i] + numbers[j] < target) i++;
    } 
    return solution;
  }
}