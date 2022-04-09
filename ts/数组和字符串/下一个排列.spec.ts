import { expect } from "chai";
import { swap } from "@utils";

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  // 排序结果，可以用树的形式表示所有排序
  // 那下一个排序，就是树节点的下一个结果
  let max = 0;
  let i = nums.length - 1;
  for (; i >= 0; i--) {
    let num = nums[i];
    if (num < max) {
      // 表示从这一层开始有右节点了，找右节点的最小分支,可以找到最大数
      break;
    } else {
      max = num;
    }
  }

  // 在 (i,..] 找到比nums[i]大一些的最小数
  let j = nums.length;
  for (; j >= 0; j--) {
    if (nums[j] > nums[i]) {
      break;
    }
  }

  swap(nums, i, j);

  // 由于(i,..]肯定是降序的,需要变为升序
  i += 1;
  j = nums.length - 1;
  for (; i < j; i++, j--) {
    swap(nums, i, j);
  }
}

it("下一个排列1", () => {
  let nums = [1, 2, 3];
  nextPermutation(nums);
  expect(nums).deep.equal([1, 3, 2]);
});

it("下一个排列2", () => {
  let nums = [3, 2, 1];
  nextPermutation(nums);
  expect(nums).deep.equal([1, 2, 3]);
});

it("下一个排列3", () => {
  let nums = [1, 3, 2];
  nextPermutation(nums);
  expect(nums).deep.equal([2, 1, 3]);
});
