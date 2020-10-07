import { TreeNode } from "./构建二叉树";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root: TreeNode) {
  let res = 1;
  const find = function (root: TreeNode | null, depth: number) {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      res = Math.max(res, depth);
    }
    find(root.left, depth + 1);
    find(root.right, depth + 1);
  }
  find(root, 1);
  return res;
};

export { maxDepth };