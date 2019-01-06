/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分查找
 */
const search = function (nums: number[], target: number): number {
  const find = function (nums: number[], left: number, right: number, target: number): number {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }

    if (right - left <= 1) {//只有两个数的时候就能判断是否存在了
      if (nums[right] === target) {
        return right;
      }
      return -1;
    }

    if (nums[middle] > nums[left]) {//左边有序升
      if (target >= nums[left] && target < nums[middle]) {
        return find(nums, left, middle - 1, target);//落在升序范围内寻找
      } else {
        return find(nums, middle + 1, right, target);//落在非升序范围寻找
      }
    } else {//右边有序升
      if (target > nums[middle] && target <= nums[right]) {//落在升序范围内寻找
        return find(nums, middle + 1, right, target);
      } else {
        return find(nums, left, middle - 1, target);//落在非升序范围寻找
      }
    }
  }

  return find(nums, 0, nums.length - 1, target);
};

search([1, 3, 5], 5);