import { strToInt } from "@ts/数组和字符串/把字符串转换成整数";
import { assert, expect, should } from "chai";

describe("把字符串转换成整数", function () {
  it("words and 987", () => {
    expect(strToInt("words and 987")).to.equal(0);
  });
});
