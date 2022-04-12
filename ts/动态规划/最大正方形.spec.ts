import { expect } from "chai";

function maximalSquare(matrix: string[][]): number {
  let length = matrix[0].length;
  // 当前位置,往左上找到的最大正方形
  let dp: number[] = new Array(length).fill(0);

  let max = 0;
  for (let row of matrix) {
    // 左上角的点
    let lt = 0;
    for (let i = 0; i < length; i++) {
      let cur = dp[i];
      if (row[i] === "1") {
        // 左,左上,上 => 最小值 + 1
        dp[i] = Math.min(Math.min(getV(dp, i), getV(dp, i - 1)), lt) + 1;
      } else if (row[i] === "0") {
        dp[i] = 0;
      }
      lt = cur;

      max = Math.max(max, dp[i]);
    }
  }

  return Math.pow(max, 2);
  function getV(dp: number[], i: number) {
    return dp[i] || 0;
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
