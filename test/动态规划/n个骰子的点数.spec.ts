import { dicesProbability } from "@ts/动态规划/n个骰子的点数";
import { assert, expect, should } from "chai";

describe("n个骰子的点数", function () {
  it("1", () => {
    expect(dicesProbability(1)).to.deep.equal([
      0.16667,
      0.16667,
      0.16667,
      0.16667,
      0.16667,
      0.16667,
    ]);
  });
  it("2", () => {
    expect(dicesProbability(2)).to.deep.equal([]);
  });
  it("3", () => {
    expect(dicesProbability(3)).to.deep.equal([]);
  });
});
