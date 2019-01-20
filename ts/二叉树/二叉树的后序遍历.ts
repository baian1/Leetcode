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
 */
var postorderTraversal = function (root: TreeNode) {
  let arr: (number | string)[] = [];
  const findNode = function (root: TreeNode | null): void {
    if (root !== null) {
      findNode(root.left);
      findNode(root.right);
      arr.push(root.value);
    }
  }
  findNode(root);
  return arr;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 后续遍历需要判断一个根结点是否被寻找过右儿子，所以需要创建一个
 * 新的列表存储寻找过右儿子的根结点
 */
var postorderTraversal2 = function (root: TreeNode) {
  let arr: (number | string)[] = [];
  let list: TreeNode[] = [];
  let preList: TreeNode[] = [];//存储被用过的根结点
  let node: TreeNode | null = root;

  while (node || list.length !== 0) {
    while (node) {
      list.push(node);
      node = node.left;
    }
    if (list.length !== 0) {
      while (preList[preList.length - 1] === list[list.length - 1] && preList.length !== 0) {
        let current = <TreeNode>preList.pop();
        list.pop();
        arr.push(current.value);
      }//假如根结点是已经被遍历过的，那就丢出来
      if (list.length === 0) {
        break;
      }
      node = list[list.length - 1].right;//在遍历完左子树，需要开始遍历右子树
      preList.push(list[list.length - 1]);//记录这个根结点已经被遍历
    }
  }
  return arr;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 使用一个标识位记录是否是已经查询过右节点的根结点
 */
var postorderTraversal3 = function (root: TreeNode) {
  let arr: (number | string)[] = [];
  let list: TreeNode[] = [];
  let node: TreeNode | null = root;
  let last: TreeNode | null = null;//标志位记录
  while (node || list.length !== 0) {
    while (node) {
      list.push(node);
      node = node.left;
    }
    node = list[list.length - 1];//向左查询的最后一个结点，表示当前结点
    if (node.right === null || node.right === last) {
      arr.push(node.value);
      list.pop();
      last = node;//用来记录右节点会不会被查询过
      node = null;
    } else {
      node = node.right;//如果有右节点存在，并且没被查询过，那就转向查右子树
    }
  }
  return arr;
};

export { postorderTraversal3 as postorderTraversal };