import { rob } from "@ts/初级算法/动态规划/打家劫舍";

function rob2(nums: number[]): number {
  if (nums.length < 2) {
    return rob(nums);
  }
  return Math.max(rob(nums.slice(0, nums.length - 1)), rob(nums.slice(1)));
}

export { rob2 };
