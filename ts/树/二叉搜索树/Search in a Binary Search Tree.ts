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
 * @param {number} val
 * @return {TreeNode}
 * 迭代
 */
var searchBST = function (root: TreeNode | null, val: number): TreeNode | null {
  let node: TreeNode | null = root;
  while (node) {
    if (node.val > val) {
      node = node.left;
    } else if (node.val === val) {
      return node;
    } else {
      node = node.right;
    }
  }
  return null;
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * 递归
 */
var searchBST2 = function (
  root: TreeNode | null,
  val: number
): TreeNode | null {
  let node: TreeNode | null = root;
  const dfs = function (node: TreeNode | null, val: number): TreeNode | null {
    if (node === null) {
      return null;
    }
    if (node.val > val) {
      return dfs(node.left, val);
    } else if (node.val === val) {
      return node;
    } else {
      return dfs(node.right, val);
    }
  };
  return dfs(node, val);
};

export { searchBST };
