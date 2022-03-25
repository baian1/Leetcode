/**
 *
 * @param nums
 * 在线算法
 */
const maxSubArray = function (nums: number[]): number {
  let current = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    max = current > max ? current : max;
    if (current <= 0) {
      current = 0;
    }
  }
  return max;
};
