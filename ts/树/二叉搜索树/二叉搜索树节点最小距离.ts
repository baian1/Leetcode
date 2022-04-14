import { TreeNode } from "../二叉树/构建二叉树";

export function minDiffInBST(root: TreeNode<number> | null): number {
  let min = Number.POSITIVE_INFINITY;
  let list: number[] = [];
  //中序遍历
  function walk(node: TreeNode<number> | null) {
    if (node === null) {
      return;
    }
    walk(node.left);
    list.push(node.val);
    walk(node.right);
  }
  walk(root);

  for (let i = 1; i < list.length; i++) {
    min = Math.min(min, list[i] - list[i - 1]);
  }
  return min;
}
