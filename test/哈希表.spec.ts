import { assert, expect, should } from "chai";
import { hashMap } from "@ts/哈希表";
should();
describe("hashmap", function () {
  let map = new hashMap();
  beforeEach(() => {
    map = new hashMap();
  });
  it("add value", () => {
    map.install("a", "1");
    map.install("b", "2");
    expect(map.get("a")).to.equal("1");
    assert.equal(map.get("b"), "2", "新增数据不相等");
  });
  it("clean data", () => {
    map.install("a", "1");
    map.clearup();
    assert.equal(map.get("a"), null, "数据清除失败");
  });
});
