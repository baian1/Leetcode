import { expect } from "chai";

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s: string) {
  const nums = new Array(s.length + 1).fill(0).map((_, index) => index);
  const res: number[] = [];
  for (let char of s) {
    switch (char) {
      case "I": {
        res.push(nums.shift()!);
        break;
      }
      case "D": {
        res.push(nums.pop()!);
        break;
      }
    }
  }
  res.push(nums.pop()!);
  return res;
};

describe("增减字符串匹配", () => {
  it("1", () => {
    expect(diStringMatch("IDID")).deep.equal([0, 4, 1, 3, 2]);
  });
});
