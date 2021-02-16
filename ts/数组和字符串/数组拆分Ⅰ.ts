function arrayPairSum(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  let count = nums.length / 2;
  let sum = 0;

  for (let i = 0; i <= count; i++) {
    sum += nums[i];
  }
  return sum;
}
