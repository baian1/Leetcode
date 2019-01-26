import { TreeNode } from "../二叉树/构建二叉树";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root: TreeNode | null): boolean {
  let status = true;
  let list: number[] = [];
  const dfs = function (root: TreeNode | null): void {
    if (root === null) {
      return;
    }
    if (status) {
      dfs(root.left);
      list.push(<number>root.value);
      if (list.length > 1) {
        if (list[list.length - 2] > list[list.length - 1]) {
          status = false;
        }
      }
      dfs(root.right);
    }
  }
  dfs(root);
  return status;
};

export { isValidBST };