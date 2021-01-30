import { longestPrefix, longestPrefix2 } from "@ts/数组和字符串/最长快乐前缀";
import { assert, expect, should } from "chai";
should();
describe("最长快乐前缀", function () {
  it("aaaaa", () => {
    expect(longestPrefix("aaaaa")).to.equal("aaaa");
  });
});

describe("最长快乐前缀2", function () {
  it("aaaaa", () => {
    expect(longestPrefix2("aaaaa")).to.equal("aaaa");
  });
  it("aaaaa", () => {
    expect(longestPrefix2("aaaaa")).to.equal("aaaa");
  });
  it("level", () => {
    expect(longestPrefix2("level")).to.equal("l");
  });
  it("ababab", () => {
    expect(longestPrefix2("ababab")).to.equal("abab");
  });
  it("bba", () => {
    expect(longestPrefix2("bba")).to.equal("");
  });
});
