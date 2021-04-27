import { rangeSumBST } from "@ts/树/二叉树/二叉搜索树的范围之和";
import { initTree } from "@ts/树/二叉树/构建二叉树";
import { expect } from "chai";

describe("二叉搜索树的范围和", () => {
  it("1", () => {
    const tree = initTree<number>([
      18,
      9,
      27,
      6,
      15,
      24,
      30,
      3,
      null,
      12,
      null,
      21,
    ]);
    expect(rangeSumBST(tree, 18, 24)).to.equal(63);
  });
});
