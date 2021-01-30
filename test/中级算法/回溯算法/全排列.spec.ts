import { longestCommonSubsequence2 } from "@ts/中级算法/动态规划/最长公共子序列";
import { permute2 } from "@ts/中级算法/回溯算法/全排列";
import { assert, expect } from "chai";

describe("全排列", function () {
  it(`[1,2,3]'`, () => {
    const resList = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];
    permute2([1, 2, 3]).forEach((v, index) => {
      expect(v).is.deep.equal(resList[index]);
    });
  });
});
