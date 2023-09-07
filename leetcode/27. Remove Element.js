/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  if (nums.length === 1 && nums[0] === val) {
    return [];
  }
  const baseLength = nums.length;

  let k = 0;

  let endIndex = nums.length - 1;
  function swapEls(index) {
    if (nums[endIndex] === val) {
      nums.splice(endIndex, 1);
      if (endIndex > 0) {
        endIndex -= 1;
        swapEls(index);
      }
    } else {
      k += 1;
      nums[index] = nums[endIndex];
      nums.splice(endIndex, 1);
    }
  }
  for (let i = 0; i < endIndex; i++) {
    if (nums[i] === val) {
      swapEls(i);
    }
  }

  return baseLength - endIndex - k;
};
const nums = [3, 3];
console.log(removeElement(nums, 3));
console.log(nums);
