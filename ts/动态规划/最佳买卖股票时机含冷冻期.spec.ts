import { max } from "@utils";
import { expect } from "chai";
import { describe } from "mocha";

export function maxProfit(prices: number[]): number {
  const dp: Array<[have: number, sell: number, empty: number]> = [];
  for (let i of prices) {
    dp.push([0, 0, 0]);
  }

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0] + prices[i] - prices[i - 1], dp[i - 1][2]);
    dp[i][1] = dp[i - 1][0] + prices[i] - prices[i - 1];
    dp[i][2] = max(dp[i - 1][1], dp[i - 1][2]);
  }
  return max(...dp[prices.length - 1]);
}

describe("最佳买卖股票时机含冷冻期", () => {
  it("1", () => {
    expect(maxProfit([1, 2, 3, 0, 2])).to.deep.equal(3);
  });
  it("2", () => {
    expect(maxProfit([1, 11, 2, 7, 4])).to.deep.equal(10);
  });
});
