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
var inorderTraversal = function (root: TreeNode) {
  let arr: (number | string)[] = [];
  const findNode = function (root: TreeNode | null): void {
    if (root !== null) {
      findNode(root.left);
      arr.push(root.value);
      findNode(root.right);
    }
  }
  findNode(root);
  return arr;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 迭代写法
 * 建立一个堆栈，用来存储遍历的东西
 */
var inorderTraversal2 = function (root: TreeNode) {
  let arr: (number | string)[] = [];
  let list: TreeNode[] = [];
  let node: TreeNode | null = root;
  while (node || list.length !== 0) {
    while (node) {
      list.push(node);
      node = node.left;
    }
    if (list.length !== 0) {
      node = <TreeNode>list.pop();
      arr.push(node.value);
      node = node.right;
    }
  }
  return arr;
};

export { inorderTraversal };