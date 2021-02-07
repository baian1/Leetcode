export function dicesProbability(n: number): number[] {
  let dp: number[][] = new Array(n);
  dp[0] = [1, 1, 1, 1, 1, 1];
  for (let i = 1; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < n * 6; j++) {
      if (j === 0) {
        dp[i][j] = 0;
        continue;
      }
      let deleteNum = 0;
      let addNum = 0;
      if (j - 7 >= 0) {
        deleteNum = dp[i - 1][j - 7];
      }
      if (dp[i - 1][j - 1]) {
        addNum = dp[i - 1][j - 1];
      }
      dp[i][j] = dp[i][j - 1] - deleteNum + addNum;
    }
  }
  const sumCount = Math.pow(6, n);
  return dp[n - 1].filter((v) => v > 0).map((v) => v / sumCount);
}
