/**
 * 输入: nums = [4,2,1]
 * 输出: false
 * 解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
 *
 * 输入: nums = [4,2,3]
 * 输出: true
 * 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
 */

/**
 *
 * @param nums
 */
export function checkPossibility(nums: number[]): boolean {
  let count = 0;
  for (let i = 0, j = 1; j < nums.length; i++, j++) {
    if (nums[i] > nums[j]) {
      count++;
      //判断
      //变化哪个nums[i]或nums[j]值
      //使其符合递增序列
      if (nums[j] >= nums[i - 1] || i - 1 < 0) {
        nums[i] = nums[j];
      } else {
        nums[j] = nums[i];
      }
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}
