/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import { TreeNode } from "@utils";

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (
  root: TreeNode | null,
  p: number,
  q: number
): TreeNode | null {
  let node: TreeNode | null = root;
  while (node) {
    if (node.val > p && node.val > q) {
      node = node.left;
      continue;
    }
    if (node.val < q && node.val < p) {
      node = node.right;
      continue;
    }
    if (node.val === q || node.val === p) {
      return node;
    }
    return node;
  }
  return null;
};

export { lowestCommonAncestor };
