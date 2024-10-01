/**
 * @param {number[]} nums
 * @return {number}
 */

// compare two numbers at a time until we find a non-duplicate number
// when found, replace the first value with that unique number and move onto the next two points in the array
// return first pointer since it will be at the last unique number 
function remove(nums) {
  for (let i = 1, j = 1; i < nums.length;) {
    if (nums[j] === nums[i - 1]) {
      nums[i] = nums[j]
      i++;
      j++;
    }
    else j++
  }
  return nums;
}
var removeDuplicates = function(nums) {
  let p1 = 1;
  let p2 = 1;
  while (p2 < nums.length) {
    if (nums[p2] === nums[p1-1]) p2++;
    else if (nums[p2] !== nums[p1-1]) {
      nums[p1] = nums[p2];
      p1++;
      p2++;
    }
  }
  return p1;
}