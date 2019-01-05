/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 快排写法，找到K位置就返回
 */
const findKthLargest = function (nums: number[], k: number): number {
  let state = 0;
  const findSort = function (nums: number[], left: number, right: number, k: number) {
    let i = left;
    let j = right;
    let current = nums[i];
    while (i < j) {
      while (current >= nums[j] && i < j) {
        j--;
      }
      nums[i] = nums[j];
      while (current <= nums[i] && i < j) {
        i++;
      }
      nums[j] = nums[i];
    }
    nums[i] = current;
    if (i === k) {
      state = current;
      return;
    }
    if (i > k) {
      findSort(nums, left, i - 1, k);
    } else {
      findSort(nums, i + 1, right, k);
    }//判断在哪个区间就去哪寻找
  }
  findSort(nums, 0, nums.length - 1, k - 1);
  return state;
};

const nums4 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k2 = 4;

findKthLargest(nums4, k2);