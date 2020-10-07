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
 * log2(b)=h有点疑问，改用斐波数列判断
 * 通过平衡二叉树的高度和节点数关系进行判断
 * 如果是平衡二叉树，这个符合
 * 如果不是平衡二叉树，这个也有可能符合
 * 
 * 用这种判别条件失效了
 */

export { isBalanced };