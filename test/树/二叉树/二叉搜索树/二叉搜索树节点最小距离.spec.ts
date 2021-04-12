import { minDiffInBST } from "@ts/树/二叉搜索树/二叉搜索树节点最小距离";
import { initTree } from "@ts/树/二叉树/构建二叉树";
import { expect } from "chai";

describe("二叉搜索树节点最小距离", () => {
  it("1", () => {
    const tree = initTree<number>([90, 69, null, 49, 89, null, 52]);
    expect(minDiffInBST(tree)).to.equal(1);
  });
});
