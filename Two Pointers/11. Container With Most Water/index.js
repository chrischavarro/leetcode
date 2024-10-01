/**
 * @param {number[]} height
 * @return {number}
 */

// get area by multiplying distance between the two active values by the lower of the two values
// move the pointer positioned at the lower of the two values
// set the max area as the greatest of the value pairs that have been traversed 
function maxArea(height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {
    let diameter = j - i;
    area = diameter * Math.min(i, j);
    max = Math.max(max, area);
    if (height[i] < height[j]) i++
    else j--
  }
  return max;
}
var maxArea = function(height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {
    const distance = j - i;
    const area = distance * Math.min(height[i], height[j]);
    max = Math.max(max, area);

    if (height[i] < height[j]) i++;
    else j--;
  }
  return max;
}