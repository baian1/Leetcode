/**
 * 0/1背包问题
 */

const getMaxVal = function (value: number[], heave: number[], fuzhong: number) {
  let maxI = value.length;
  let maxJ = fuzhong;
  let best: number[][] = Array(maxI);
  for (let i = 0; i < maxI; i++) {
    best[i] = Array(maxJ + 1).fill(0);
  }

  for (let i = 1; i < maxI; i++) {
    for (let j = 1; j < maxJ + 1; j++) {
      while (j < heave[i]) {
        best[i][j] = best[i - 1][j];
        j++;
      }
      best[i][j] = Math.max(best[i - 1][j], best[i - 1][j - heave[i]] + value[i]);
    }
  }
  return best[maxI - 1][maxJ];
}

/**
 * 一维数组操作
 */
const getMaxVal2 = function (value: number[], heave: number[], fuzhong: number) {
  let maxI = value.length;
  let maxJ = fuzhong;
  let best: number[] = Array(fuzhong+1).fill(0);

  for (let i = 1; i < maxI; i++) {
    for (let j = maxJ; j>=heave[i]; j--) {
      best[j] = Math.max(best[j], best[j - heave[i]] + value[i]);
    }
  }
  return best;
}


export { getMaxVal2 as getMaxVal };