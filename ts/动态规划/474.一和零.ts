/**
 *
 * @param strs 0/1组成的字符串数组
 * @param m 0个数
 * @param n 1个数
 */
function findMaxForm(strs: string[], m: number, n: number): number {
  //1. 将strs转为0/1的数组
  const strsWithZeroAndOne: [zero: number, one: number][] = strs.map((str) => {
    const res: [number, number] = [0, 0];
    for (let num of str) {
      if (num === "0") {
        res[0]++;
      } else {
        res[1]++;
      }
    }
    return res;
  });
  //2. 构造空的dp
  const dp: number[][][] = [];
  for (let l = 0; l < strs.length; l++) {
    let data = [];
    for (let i = 0; i <= m; i++) {
      let data2 = [];
      for (let j = 0; j <= n; j++) {
        data2.push(0);
      }
      data.push(data2);
    }
    dp.push(data);
  }

  for (let l = 0; l < strs.length; l++) {
    const [zero, one] = strsWithZeroAndOne[l];
    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        //获取该 m,n 下，上一次的最大值
        let max = dp[l - 1]?.[i]?.[j] ?? 0;

        if (i >= zero && j >= one) {
          //选择当前的元素后的最大可能性
          let newMax = dp[l - 1]?.[i - zero]?.[j - one] ?? 0;
          //加上当前元素
          newMax++;
          max = Math.max(newMax, max);
        }
        dp[l][i][j] = max;
      }
    }
  }
  return dp[strs.length - 1][m][n];
}

export { findMaxForm };
