/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 * dfs队列
 */
var findTargetSumWays = function (nums: number[], S: number) {
  let stack = [];
  let cur = 0;
  let count = 0;
  let i = 0;
  let maxI = nums.length;
  while (true) {
    while (nums[i] !== undefined) {
      cur += nums[i];
      i++;
      stack.push('+');
    }
    if (cur === S) {
      count++;
    }
    let flag = stack.pop();
    i--;
    if (flag === '+') {
      stack.push('-');
      cur -= 2 * nums[i];
      i++;
    } else {
      cur += nums[i];
      let flag = stack.pop();
      i--;
      while (flag === '-') {
        flag = stack.pop();
        cur += nums[i];
        i--;
      }

      if (flag === '+') {
        stack.push('-');
        cur -= 2 * nums[i];
        i++;
      } else {
        break;
      }
    }
  }
  return count;
};

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 * dfs递归
 */
var findTargetSumWays2 = function (nums: number[], S: number) {
  let count = 0;
  const dfs = function (i: number, cur: number) {
    if (i === nums.length) {
      if (S === cur) {
        count++;
      }
    }
    dfs(i + 1, cur + nums[i]);
    dfs(i + 1, cur - nums[i]);
  }
  dfs(0, 0);
  return count;
}

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 * 动态规划解法
 * 此题可以根据数学原理，转换为求 2*子集和=集的和+S
 * 可以用动态规划的背包问题思路求解此题
 */
var findTargetSumWays3 = function (nums: number[], S: number) {
  let sum = 0;
  for (let i of nums) {
    sum += i;
  }
  if(sum<S){
    return 0;
  }
  let target = S + sum;
  if (target % 2 !== 0) {
    return 0;
  }
  target/=2;
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] += dp[j - num];
    }
  }
  return dp[target];
}

export { findTargetSumWays3 };