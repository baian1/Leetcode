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
  const dfs = function (
    root: TreeNode | null,
    min: number | null,
    max: number | null
  ): boolean {
    if (root === null) {
      return true;
    }
    if (min !== null && root.val <= min) {
      return false;
    }
    if (max !== null && root.val >= max) {
      return false;
    }
    return (
      dfs(root.left, min, <number>root.val) &&
      dfs(root.right, <number>root.val, max)
    );
  };
  return dfs(root, null, null);
};

export { isValidBST };
