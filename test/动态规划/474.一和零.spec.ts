import { findMaxForm } from "@ts/动态规划/474.一和零";
import { expect } from "chai";

describe("一和零", () => {
  it("1", () => {
    expect(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3)).to.equal(4);
  });
});
