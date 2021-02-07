import { assert, expect, should } from "chai";
import { checkPossibility } from "@ts/数组和字符串/非递减数列";
should();
describe("非递减数列", function () {
  it("[4,2,3]", () => {
    expect(checkPossibility([4, 2, 3])).to.equal(true);
  });
  it("[3,4,2,3]", () => {
    expect(checkPossibility([3, 4, 2, 3])).to.equal(false);
  });
  it("[5,7,1,8]", () => {
    expect(checkPossibility([5, 7, 1, 8])).to.equal(true);
  });
});
