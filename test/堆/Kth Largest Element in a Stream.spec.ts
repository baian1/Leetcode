import { KthLargest } from "@ts/堆/Kth Largest Element in a Stream";
import { expect } from "chai";

describe("数据流中的第 K 大元素", () => {
  it("1", () => {
    // ["KthLargest","add","add","add","add","add"]
    // [[3,[4,5,8,2]],[3],[5],[10],[9],[4]]
    const kth = new KthLargest(3, [4, 5, 8, 2]);
    expect(kth.add(3)).equal(4);
    expect(kth.add(5)).equal(5);
    expect(kth.add(10)).equal(5);
    expect(kth.add(9)).equal(8);
    expect(kth.add(4)).equal(8);
  });
  it("2", () => {
    // ["KthLargest","add","add","add","add","add"]
    // [[1,[]],[-3],[-2],[-4],[0],[4]]
    const kth = new KthLargest(1, []);
    expect(kth.add(-3)).equal(-3);
    expect(kth.add(-2)).equal(-2);
    expect(kth.add(-4)).equal(-2);
    expect(kth.add(0)).equal(0);
    expect(kth.add(4)).equal(4);
  });
});
