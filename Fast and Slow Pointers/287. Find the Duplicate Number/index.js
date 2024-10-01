/**
 * @param {number[]} nums
 * @return {number}
 */
// use two pointers to cycle through nums based on their index
// break cycle when both pointers meet, set a new pointer traverse array at same pace as original slow pointer
// duplicate number is found when both pointers reflect the same value
var findDuplicate = function(nums) {
  let slow = 0;
  let fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) break;
  }
  let slow2 = 0;
  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];
    if (slow === slow2) return slow;
  }
}