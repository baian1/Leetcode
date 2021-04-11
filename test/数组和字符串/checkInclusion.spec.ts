import { expect } from "chai";
import { checkInclusion } from "@ts/数组和字符串/checkInclusion";
/**
 * 567. 字符串的排序
 */
describe("字符串的排序", () => {
  it("ab与eidbaooo", () => {
    expect(checkInclusion("ab", "eidbaooo")).to.equal(true);
  });
  it("ab与b", () => {
    expect(checkInclusion("ab", "b")).to.equal(false);
  });
});
