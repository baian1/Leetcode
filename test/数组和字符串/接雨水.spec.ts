import { trap } from "@ts/动态规划/接雨水";
// import { trap } from "@ts/数组和字符串/接雨水";
import { expect } from "chai";

describe("接雨水", () => {
  it("1", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).equal(6);
  });
  it("2", () => {
    expect(trap([5, 4, 1, 2])).equal(1);
  });
  it("3", () => {
    expect(trap([4, 2, 0, 3, 2, 5])).equal(9);
  });
});
