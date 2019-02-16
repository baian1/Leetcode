/**
 * 在一个给定的数组nums中，总是存在一个最大元素 。
 * 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
 * 如果是，则返回最大元素的索引，否则返回-1。
 * 
 * nums 的长度范围在[1, 50].
 * 每个 nums[i] 的整数范围在 [0, 99].
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums: number[]): number {
  let max: number = 0;
  let min: number = 0;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      min = max;
      max = nums[i];
      index = i;
      continue;
    }
    if (nums[i] > min) {
      min = nums[i];
    }
  }
  if (max >= 2 * min) {
    return index;
  }
  return -1;
};

export { dominantIndex };