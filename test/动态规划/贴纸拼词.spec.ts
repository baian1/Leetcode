// ["with","example","science"]
// "thehat"

import { minStickers } from "@ts/动态规划/贴纸拼词";
import { expect } from "chai";

describe("贴纸拼词", () => {
  it("1", () => {
    expect(minStickers(["with", "example", "science"], "thehat")).equal(3);
  });
  it("2", () => {
    expect(
      minStickers(["travel", "quotient", "nose", "wrote", "any"], "lastwest")
    ).equal(4);
  });
});
