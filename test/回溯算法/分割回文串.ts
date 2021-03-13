import { partition } from "@ts/回溯算法/分割回文串";
import { assert } from "chai";

describe("分割回文串", function () {
  it("aab", () => {
    assert.deepEqual(partition("aab"), [
      ["a", "a", "b"],
      ["aa", "b"],
    ]);
  });
});
