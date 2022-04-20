import { memoryFn } from "@utils";
import { expect } from "chai";

const memoryNumTrees = memoryFn(numTrees);

function numTrees(n: number): number {
  if (n <= 2) {
    return Math.max(n, 1);
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    // i 为分割线
    sum += numTrees(i - 1) * numTrees(n - i);
  }
  return sum;
}

describe("不同的二叉搜索树", () => {
  it("1", () => {
    expect(memoryNumTrees(3)).equal(5);
  });
});
