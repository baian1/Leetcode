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
 * 计算每个结点左右树的深度
 * 当前结点深度为左右树大的深度加一
 * 递归验证
 */
var isBalanced = function (root: TreeNode | null) {
  if (root === null) {
    return true;
  }
  let status = true;
  const dfs = function (root: TreeNode | null): number {
    if (root === null) {
      return 0;
    }
    let left = dfs(root.left) + 1;
    let right = dfs(root.right) + 1;
    if (Math.abs(left - right) > 1) {
      status = false;
    }
    return Math.max(left, right);
  }
  dfs(root);
  return status;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * 通过平衡二叉树的高度和节点数关系进行判断
 */
var isBalanced2 = function (root: TreeNode | null) {
  if (root === null) {
    return true;
  }
  let res = 0;//统计深度
  let n = 0;//统计结点个数
  const find = function (root: TreeNode | null, depth: number) {
    if (root === null) {
      return;
    }
    n++;
    if (root.left === null && root.right === null) {
      res = Math.max(res, depth);
    }
    find(root.left, depth + 1);
    find(root.right, depth + 1);
  }
  find(root,0);
  return Math.floor(Math.log2(n))>=res;
};

export { isBalanced2 as isBalanced };