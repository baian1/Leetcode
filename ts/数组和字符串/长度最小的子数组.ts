/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 * 滑动窗口
 */
var minSubArrayLen = function (s: number, nums: number[]) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let minLength = Infinity;
  for (j; j < nums.length; j++) {
    sum += nums[j];
    if (sum < s) {
      continue;
    } else {
      while(sum>=s){
        sum-=nums[i];
        i++;
      }
      minLength=Math.min(minLength,j-i+2);
    }
  }
  return minLength===Infinity?0:minLength;
};

export { minSubArrayLen };