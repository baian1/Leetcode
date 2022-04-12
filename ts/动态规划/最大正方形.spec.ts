import { expect } from "chai";

function maximalSquare(matrix: string[][]): number {
  let length = matrix[0].length;
  // 当前位置,往左上找到的最大正方形
  let dp: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    dp.push(new Array(length).fill(0));
  }
  let max = 0;
  for (let j = 0; j < matrix.length; j++) {
    const row = matrix[j];
    for (let i = 0; i < length; i++) {
      if (row[i] === "1") {
        // 左,左上,上 => 最小值 + 1
        dp[j][i] = getMin(dp, j, i) + 1;
      } else if (row[i] === "0") {
        dp[j][i] = 0;
      }

      max = Math.max(max, dp[j][i]);
    }
  }

  return Math.pow(max, 2);
  function getV(matrix: number[][], i: number, j: number) {
    return matrix[i]?.[j] || 0;
  }
  function getMin(dp: number[][], i: number, j: number) {
    return Math.min(
      Math.min(getV(dp, i - 1, j), getV(dp, i, j - 1)),
      getV(dp, i - 1, j - 1)
    );
  }
}

it("最大正方形", () => {
  expect(
    maximalSquare([
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"],
    ])
  ).to.equal(4);
});
