import { expect } from "chai";

function maxValue(grid: number[][]): number {
  let dp = new Array(grid[0].length).fill(0);
  for (let row of grid) {
    dp[0] = dp[0] + row[0];
    for (let i = 1; i < row.length; i++) {
      dp[i] = Math.max(dp[i] + row[i], dp[i - 1] + row[i]);
    }
  }
  return dp[dp.length - 1];
}

it("1", () => {
  expect(
    maxValue([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ])
  ).equal(12);
});
