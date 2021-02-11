import { trap } from "@ts/数组和字符串/接雨水";
import { expect } from "chai";

describe("接雨水", () => {
  it("1", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).equal(6);
  });
});
