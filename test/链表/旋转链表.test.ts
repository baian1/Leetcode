import { initList } from "@ts/中级算法/链表/NodeList";
import { rotateRight } from "@ts/中级算法/链表/旋转链表";
import { assert, expect, should } from "chai";

describe("旋转列表", function () {
  it("[1] 1", () => {
    expect(rotateRight(initList([1]), 1)?.toArray()).to.deep.equal([1]);
  });
  it("[1, 2] 2", () => {
    expect(rotateRight(initList([1, 2]), 2)?.toArray()).to.deep.equal([1, 2]);
  });
});
