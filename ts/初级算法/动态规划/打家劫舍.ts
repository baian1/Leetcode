/**
 *
 * @param nums
 * 动态规划问题，将大问题分解为小问题，比如[2,7,9,3,1]这一排
 * 先分析[2]再是[2,7]
 * 然后[2,7,9]就是第三家偷不偷的问题，
 * 偷9+[2]的最大值
 * 不偷[2,7]的最大值
 * 选取一个大的值为[2,7,9]的最优解
 */
export const rob = function (nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  let sumMoney: number[] = [];
  let i = 0;
  for (i; i < nums.length; i++) {
    if (i === 0) {
      sumMoney[0] = nums[i];
    }
    if (i === 1) {
      sumMoney[1] = nums[0] > nums[1] ? nums[0] : nums[1];
    }
    if (i > 1) {
      let yes = nums[i] + sumMoney[i - 2]; //偷
      let no = sumMoney[i - 1]; //不偷
      sumMoney[i] = yes > no ? yes : no;
    }
  }
  return sumMoney[i - 1];
};
