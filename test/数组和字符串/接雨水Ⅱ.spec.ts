import { trapRainWater } from "@ts/数组和字符串/接雨水Ⅱ";
// import { trap } from "@ts/数组和字符串/接雨水";
import { expect } from "chai";

describe("接雨水Ⅱ", () => {
  it("0", () => {
    expect(
      trapRainWater([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ])
    ).equal(1);
  });
  it("1", () => {
    expect(
      trapRainWater([
        [1, 4, 3, 1, 3, 2],
        [3, 2, 1, 3, 2, 4],
        [2, 3, 3, 2, 3, 1],
      ])
    ).equal(4);
  });
  it("2", () => {
    expect(
      trapRainWater([
        [12, 13, 1, 12],
        [13, 4, 13, 12],
        [13, 8, 10, 12],
        [12, 13, 12, 12],
        [13, 13, 13, 13],
      ])
    ).equal(14);
  });
  it("3", () => {
    expect(
      trapRainWater([
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, 10],
        [11, 12, 13],
        [14, 15, 16],
      ])
    ).equal(0);
  });
  it("4", () => {
    expect(
      trapRainWater([
        [5, 8, 7, 7],
        [5, 2, 1, 5],
        [7, 1, 7, 1],
        [8, 9, 6, 9],
        [9, 8, 9, 9],
      ])
    ).equal(12);
  });
});
