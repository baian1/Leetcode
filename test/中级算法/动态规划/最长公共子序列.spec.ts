import { longestCommonSubsequence2 } from "@ts/中级算法/动态规划/最长公共子序列";
import { assert } from "chai";

describe("hashmap", function () {
  it(`abc def,0'`, () => {
    assert.equal(longestCommonSubsequence2("abc", "def"), 0);
  });
});
