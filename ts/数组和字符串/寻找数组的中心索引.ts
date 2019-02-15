/**
 * 给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。
 * 我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 先统计整个数组和
 * 然后分左右两个和与中间的间隔
 * 遍历那个间隔的位置
 */
var pivotIndex = function (nums: number[]): number {
  let right = 0;
  for (let i of nums) {
    right += i;
  }
  let left = 0;
  let pre = 0;
  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    left += pre;
    pre = nums[i];
    if (left === right) {
      return i
    }
  }
  return -1;
};

export { pivotIndex };