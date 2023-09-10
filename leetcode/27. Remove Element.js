// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let valEntries = 0;
  if (nums.length > 1) {
    for (let i = 0; i <= nums.length - 1 - valEntries; i++) {
      const curr = nums[i];
      if (curr === val) {
        nums[i] = nums[nums.length - 1 - valEntries];
        i -= 1;
        valEntries += 1;
      }
    }
  } else {
    if (nums[0] === val) {
      return 0;
    }
    return 1;
  }
  return nums.length - valEntries;
};

console.log(removeElement([2, 2, 2], 2));
