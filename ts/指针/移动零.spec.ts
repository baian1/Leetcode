import { expect } from "chai";

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let fast = 0;
  // 遇到0不动
  let slow = 0;
  for (; fast < nums.length; fast++) {
    if (nums[fast] !== 0 && nums[slow] === 0) {
      swap(nums, fast, slow);
    }
    if (nums[slow] !== 0) {
      slow++;
    }
  }
}

function swap(arr: unknown[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

it("移动零", () => {
  let nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).deep.eq([1, 3, 12, 0, 0]);
});
export {};
