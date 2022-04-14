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
 * @param {number} sum
 * @return {boolean}
 * 使用递归
 */
var hasPathSum = function (root: TreeNode, sum: number) {
  let cur: number = 0;
  let state = false;
  const dfs = function (node: TreeNode | null, cur: number) {
    if (state === true) {
      return;
    }
    if (node === null) {
      return;
    }
    if (node.left === null && node.right === null) {
      //判断是叶节点
      if (cur + <number>node.val === sum) {
        state = true;
      }
      return;
    }
    dfs(node.left, cur + <number>node.val);
    dfs(node.right, cur + <number>node.val);
  };
  dfs(root, cur);
  return state;
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 * 使用迭代
 * 这里要采用后续遍历
 */
var hasPathSum2 = function (root: TreeNode, sum: number) {
  let arr: (number | string)[] = [];
  let list: TreeNode[] = [];
  let node: TreeNode | null = root;
  let last: TreeNode | null = null; //标志位记录
  let cur = 0;
  while (node || list.length !== 0) {
    while (node) {
      list.push(node);
      cur += <number>node.val;
      node = node.left;
    }
    node = list[list.length - 1]; //向左查询的最后一个结点，表示当前结点
    if (node.right === null || node.right === last) {
      arr.push(node.val);
      if (node.left === null && node.right === null) {
        if (cur === sum) {
          return true;
        }
      }
      list.pop();
      cur -= <number>node.val;
      last = node; //用来记录右节点会不会被查询过
      node = null;
    } else {
      node = node.right; //如果有右节点存在，并且没被查询过，那就转向查右子树
    }
  }
  return false;
};

export { hasPathSum2 as hasPathSum };
