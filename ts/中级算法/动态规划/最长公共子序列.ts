/**
 * 递归解法
 * @param text1
 * @param text2
 */
export function longestCommonSubsequence(text1: string, text2: string): number {
  const dp = (i: number, j: number): number => {
    if (i === -1 || j === -1) {
      return 0;
    } else if (text1[i] === text2[j]) {
      return dp(i - 1, j - 1) + 1;
    } else {
      return Math.max(dp(i - 1, j), dp(i, j - 1));
    }
  };
  return dp(text1.length - 1, text2.length - 1);
}

/**
 * 动态规划解法
 * 记录每次的结果,减少计算次数
 * @param text1
 * @param text2
 */
export function longestCommonSubsequence2(
  text1: string,
  text2: string
): number {
  //创建dp数组全部置为空
  const dp: number[][] = [];
  for (let i = 0; i < text1.length + 1; i++) {
    dp.push(new Array(text2.length + 1).fill(0));
  }
  for (let i = 1; i < text1.length + 1; i++) {
    for (let j = 1; j < text2.length + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
}
