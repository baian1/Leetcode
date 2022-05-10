import { initTree, TreeNode } from "@utils";
import { expect } from "chai";

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode<number | string> | null): string {
  let res = [];
  let queue = [root];
  let nextqueue = [];
  while (queue.length > 0) {
    let node = queue.shift();
    if (!node) {
      res.push(null);
    } else {
      nextqueue.push(node.left);
      nextqueue.push(node.right);
      res.push(node.val);
    }
    if (queue.length === 0) {
      queue = nextqueue;
      nextqueue = [];
    }
  }
  while (res[res.length - 1] === null) {
    res.pop();
  }
  return JSON.stringify(res);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  return initTree(JSON.parse(data));
}
describe("序列化和反序列化二叉搜索树", () => {
  it("1", () => {
    let tree = initTree([5, 3, 6, 2, 4, null, null, 1]);
    let res = serialize(tree);
    expect(res).to.deep.equal(JSON.stringify([5, 3, 6, 2, 4, null, null, 1]));
  });
});

export {};
