import { maxTurbulenceSize } from "@ts/数组和字符串/最长湍流子数组";
import { assert, expect, should } from "chai";

describe("最长湍流子数组", function () {
  it("[4,2,3]", () => {
    expect(maxTurbulenceSize([4, 2, 3])).to.equal(3);
  });
  it("[100]", () => {
    expect(maxTurbulenceSize([100])).to.equal(0);
  });
});
