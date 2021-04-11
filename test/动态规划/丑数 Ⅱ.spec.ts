import { nthUglyNumber } from "@ts/动态规划/丑数 Ⅱ";
import { expect } from "chai";

describe("丑数 Ⅱ", () => {
  it("1", () => {
    expect(nthUglyNumber(1)).eq(1);
  });
  it("10", () => {
    expect(nthUglyNumber(10)).to.eq(12);
  });
});
