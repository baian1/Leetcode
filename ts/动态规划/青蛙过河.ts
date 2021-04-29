function canCross(stones: number[]): boolean {
  const n = stones.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = true;
  //可以知道，步数最多单调递增
  //石子隔太远时断开
  for (let i = 1; i < n; ++i) {
    if (stones[i] - stones[i - 1] > i) {
      return false;
    }
  }

  //从0石子开始跳
  //在1里面寻找跳的到的
  for (let i = 1; i < n; ++i) {
    //第n个石子跳的最大步数
    for (let j = i - 1; j >= 0; --j) {
      //k为两个石子间的
      const k = stones[i] - stones[j];
      //当最大步数都到不了，直接跳过
      if (k > j + 1) {
        break;
      }
      //判断当前格子能否跳到
      dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1];
      if (i === n - 1 && dp[i][k]) {
        return true;
      }
    }
  }
  return false;
}
