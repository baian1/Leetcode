import { expect } from "chai";

function ischar(num: string) {
  return Number(num) <= 25 && num[0] !== "0";
}

function translateNum(num: number): number {
  const dp = [1];
  const numStr = `${num}`;
  for (let i = 1; i < numStr.length; i++) {
    if (ischar(numStr.slice(i - 1, i + 1))) {
      dp[i] = dp[i - 1] + Math.max(dp[i - 2] || 0, 1);
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[dp.length - 1];
}

it("1", () => {
  expect(translateNum(12258)).equal(5);
});
