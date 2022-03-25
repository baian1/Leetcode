import { expect } from "chai";

function maxSubArray(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  let dp = [nums[0]];
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
}

it("连续子数组的最大和", () => {
  expect(maxSubArray([-2, -1])).equal(-1);
});

export {};
