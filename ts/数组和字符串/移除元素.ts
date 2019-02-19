/**
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 使用双指针，一个负责迭代，一个负责记录位置（移除对应val后的元素位置）
 */
var removeElement = function (nums: number[], val: number) {
  let i = 0;//迭代
  let j = 0;//记录位置
  for (i; i < nums.length; i++) {
    if (nums[i] === val) {
      continue;
    }
    nums[j] = nums[i];
    j++;
  }
  return j;
};