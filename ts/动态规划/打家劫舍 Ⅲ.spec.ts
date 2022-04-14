import { initTree, max, TreeNode } from "@utils";
import { expect } from "chai";

export function rob(root: TreeNode | null): number {
  // 取根节点
  let selectedMap: Map<TreeNode | null, number> = new Map();
  let notSelectedMap: Map<TreeNode | null, number> = new Map();
  dfs(root);
  return max(getV(selectedMap, root), getV(notSelectedMap, root));

  function dfs(root: TreeNode | null) {
    if (root === null) {
      return;
    }

    dfs(root.left);
    dfs(root.right);

    selectedMap.set(
      root,
      getV(notSelectedMap, root.left) +
        getV(notSelectedMap, root.right) +
        root.val
    );
    notSelectedMap.set(
      root,
      Math.max(getV(selectedMap, root.left), getV(notSelectedMap, root.left)) +
        Math.max(
          getV(selectedMap, root.right),
          getV(notSelectedMap, root.right)
        )
    );

    return;
  }

  function getV(map: Map<unknown, number>, k: unknown) {
    return map.get(k) || 0;
  }
}

describe("打家劫舍 Ⅲ", () => {
  it("1", () => {
    let res = rob(initTree([3, 2, 3, null, 3, null, 1]));
    expect(res).to.equal(7);
  });
  it("2", () => {
    let res = rob(initTree([4, 1, null, 2, null, 3]));
    expect(res).to.equal(7);
  });
});
