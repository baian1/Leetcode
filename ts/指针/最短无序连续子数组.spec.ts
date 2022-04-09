import { expect } from "chai";

function findUnsortedSubarray(nums: number[]): number {
  let left = -1;
  let right = -1;

  // 中间需要排序数组的最大值与最小值
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;

  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (min >= nums[n - i - 1]) {
      // 小表示在递减
      min = nums[n - i - 1];
    } else {
      // 不在递减的时候
      // 我们可能找到了 排序数组中的最小值
      // 排序数组的第一个值比最小值大一些
      left = n - i - 1;
    }

    // 同理
    if (max <= nums[i]) {
      max = nums[i];
    } else {
      right = i;
    }
  }

  // 数组顺序排列
  if (left === -1) {
    return 0;
  }

  return right - left + 1;
}

it("最短无序连续子数组1", () => {
  expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).equal(5);
});
it("最短无序连续子数组2", () => {
  expect(findUnsortedSubarray([1, 2, 3, 4])).equal(0);
});
