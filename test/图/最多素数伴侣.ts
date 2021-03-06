import { assert, expect, should } from "chai";
import { checkPossibility } from "@ts/数组和字符串/非递减数列";
import { maxPrimeMeta } from "@ts/图/最多素数伴侣";
should();
describe("素数伴侣", function () {
  it("1", () => {
    expect(maxPrimeMeta([2, 5, 6, 13])).to.equal(2);
  });
  it("2", () => {
    const nums = [
      25337,
      2817,
      17946,
      4973,
      13973,
      27161,
      11729,
      26509,
      21925,
      20578,
      25824,
      26728,
      7609,
      19330,
      13841,
      27168,
      21751,
      17414,
      28070,
      6368,
      21303,
      15087,
      5428,
      9005,
      20132,
      13445,
      19423,
      21448,
      509,
      15483,
      24242,
      23492,
      20717,
      14190,
      7808,
      9363,
      278,
      24852,
    ];
    expect(maxPrimeMeta(nums)).to.equal(18);
  });
  it("3", () => {
    const nums = [
      9360,
      2272,
      15078,
      15571,
      4734,
      18667,
      10392,
      17796,
      12207,
      14591,
      8380,
      10126,
      11627,
      1288,
      24523,
      568,
      15754,
      8400,
      11280,
      20964,
      15482,
      28433,
      26109,
      11147,
      9628,
      12296,
      8500,
      21628,
      22561,
      5532,
      8830,
      13253,
      3231,
      15580,
      27278,
      4824,
      19217,
      16038,
      10091,
      21071,
      19587,
      10243,
      8786,
      15529,
      23644,
      13228,
      21503,
      22706,
      13546,
      2937,
      24488,
      19924,
      16138,
      13815,
      22460,
      4122,
      26823,
      2987,
      25011,
      25469,
      27224,
      16237,
    ];
    expect(maxPrimeMeta(nums)).to.equal(26);
  });
  it("4", () => {
    const nums = [
      621,
      10618,
      19556,
      29534,
      25791,
      11133,
      5713,
      26642,
      25994,
      16095,
      6618,
      11447,
      29386,
      24436,
      22551,
      21467,
      2633,
      25704,
      29460,
      24325,
      8964,
      4087,
      10560,
      6478,
      9615,
      5119,
      1114,
      6773,
      9409,
      21549,
      15336,
      18995,
      2151,
      27404,
      6296,
      21066,
      3147,
      27037,
      6177,
      5650,
      16224,
      14352,
      8999,
      991,
      3012,
      16447,
      17799,
      16265,
      27163,
      24118,
      9766,
      15355,
      6161,
      3909,
      19451,
      16838,
      9113,
      10877,
    ];
    expect(maxPrimeMeta(nums)).to.equal(25);
  });
});
