import { TreeNode } from "./构建二叉树";

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * 用left构建链表
 * 然后遍历树转成right
 */
var flatten = function (root: TreeNode | null) {
  if (root === null) {
    return null;
  }
  let list: TreeNode[] = [];
  let node: TreeNode | null = root;
  let cur: TreeNode = root;//链表尾节点
  while (node || list.length !== 0) {
    while (node) {
      list.push(node);
      cur = node;
      node = node.left;
    }
    if (list.length !== 0) {
      node = <TreeNode>list.pop();
      if (node.right) {
        cur.left = node.right;
        node.right = null;
        node = cur.left;
      } else {
        node = null;
      }
    }
  }
  node = root;
  while (node.left) {
    node.right = node.left;
    node = node.right;
  }
};
/**
 * 
 * @param root 
 * 用栈，遍历所有元素，在遍历的过程中构建一个新的树
 */
var flatten2 = function (root: TreeNode) {
  let stack: TreeNode[] = [];
  let cur: TreeNode = new TreeNode(0);
  stack.push(root);
  while (stack.length !== 0) {
    let node = <TreeNode>stack.pop();
    let left = node.left;
    let right = node.right;
    node.left = null;
    node.right = null;
    cur.right = node;
    cur = cur.right;
    if (right !== null) {
      stack.push(right);
    }
    if (left !== null) {
      stack.push(left);
    }
  }
}

export { flatten };