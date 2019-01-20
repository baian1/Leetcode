/**
 * @param {number[]} nums
 * @return {number}
 * 使用暴力算法直接遍历
 * 优化:
 * 摩尔投票法
 */
var majorityElement = function (nums: number[]): number {
  let major: number = 0;
  let count: number = 0;
  for (let i of nums) {
    if (count === 0) {
      major = i;
      count++;
      continue;
    }
    if (major !== i) {
      count--;
    } else {
      count++;
    }
  }
  return major;
};

export { majorityElement };