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
 * @return {number[]}
 * 递归写法
 */
var preorderTraversal = function (root: TreeNode) {
  let arr: (number | string)[] = [];
  const findNode = function (root: TreeNode | null): void {
    if (root !== null) {
      arr.push(root.val);
      findNode(root.left);
      findNode(root.right);
    }
  };
  findNode(root);
  return arr;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 迭代写法
 * 建立一个堆栈，用来存储遍历的东西
 */
var preorderTraversal2 = function (root: TreeNode) {
  let arr: (number | string)[] = [];
  let list: TreeNode[] = [];
  let node: TreeNode | null = root;
  while (node || list.length !== 0) {
    while (node) {
      list.push(node);
      arr.push(node.val);
      node = node.left;
    }
    if (list.length !== 0) {
      node = <TreeNode>list.pop();
      node = node.right;
    }
  }
  return arr;
};

export { preorderTraversal2 as preorderTraversal };
