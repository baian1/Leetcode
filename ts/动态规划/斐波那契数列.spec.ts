import { expect } from "chai";
import { describe, it } from "mocha";

/**
 * @link https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 * @param n
 * @returns
 */
function fib(n: number): number {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n] % 1000000007;
}

describe("斐波那契数列", () => {
  it("1", () => {
    expect(fib(45)).to.equal(134903163);
  });
});
