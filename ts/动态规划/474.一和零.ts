/**
 *
 * @param strs 0/1组成的字符串数组
 * @param m 0个数
 * @param n 1个数
 */
function findMaxForm(strs: string[], m: number, n: number): number {
  //1. 构造空的dp
  const dp: number[][] = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }

  for (let str of strs) {
    const [zero, one] = getZeroAndOne(str);
    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        //获取该 m,n 下，上一次的最大值
        let max = dp[i][j];

        if (i >= zero && j >= one) {
          //选择当前的元素后的最大可能性
          let newMax = dp[i - zero][j - one];
          //加上当前元素
          newMax++;
          max = Math.max(newMax, max);
        }
        dp[i][j] = max;
      }
    }
  }
  return dp[m][n];

  function getZeroAndOne(str: string) {
    const res: [number, number] = [0, 0];
    for (let num of str) {
      if (num === "0") {
        res[0]++;
      } else {
        res[1]++;
      }
    }
    return res;
  }
}

export { findMaxForm };
