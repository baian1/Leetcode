/**
 * @param {number[]} nums
 * @return {number}
 * 在寻找峰值的过程中，一直递增，有下降的时候就会是峰值了
 */
const findPeakElement = function (nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return i - 1;
    }
  }
  return nums.length - 1;
};

findPeakElement([1, 2, 3, 1]);