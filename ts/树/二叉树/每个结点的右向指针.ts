import { TreeNode } from "./构建二叉树";

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 * 层序遍历，使用额外常数空间
 */
var connect = function (root: TreeNode): void {
  let list: TreeNode[] = [];
  list.push(root);
  while (list.length !== 0) {
    let length = list.length;
    while (length !== 0) {
      let node = <TreeNode>list.shift();
      if (length !== 1) {
        node.next = list[0];
      }
      if (node.left !== null) {
        list.push(node.left);
      }
      if (node.right !== null) {
        list.push(node.right);
      }
      length--;
    }
  }
};

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 * 递归
 */
var connect2 = function (root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  let node = root;
  let temp = root.next;//记录下一个指针该指向哪里
  while (temp) {
    if (temp.left !== null) {
      temp = temp.left;
      break;
    }
    if (temp.right !== null) {
      temp = temp.right;
      break;
    }
    temp = temp.next;
  }
  if (node.left !== null) {
    node.left.next = node.right ? node.right : temp;
  }
  if (node.right !== null) {
    node.right.next = temp;
  }
  connect2(node.right);
  connect2(node.left);//从后到前，避免出现前面遍历的时候发现temp为null
};

export { connect2 as connect };