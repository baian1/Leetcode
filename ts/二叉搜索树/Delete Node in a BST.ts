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
 * @param {number} key
 * @return {TreeNode}
 */
type fangxiang = 'right' | 'left';
var deleteNode = function (root: TreeNode, key: number) {
  if (root === null) {
    return null;
  }
  if (root.left === null && root.right === null) {
    if (root.value !== key) {
      return root;
    } else {
      return null;
    }
  }
  let node: TreeNode | null = root;
  let preNode: TreeNode | null = null;
  let status: fangxiang = 'left';
  while (node) {
    if (node.value > key) {
      preNode = node;
      status = 'left';
      node = node.left
    } else if (node.value === key) {
      break;
    } else {
      preNode = node;
      status = 'right';
      node = node.right;
    }
  }
  if (node === null) {
    return root;
  }
  if (preNode === null) {
    return node.left === null ? node.right : node.left;
  }
  if (node.left === null && node.right === null) {
    preNode[status] = null;
    return root;
  }
  if (node.left !== null && node.right !== null) {
    let leftTreeMaxNode = node.left;
    let preleftNode: TreeNode = node;
    while (leftTreeMaxNode.right) {
      preleftNode = leftTreeMaxNode;
      leftTreeMaxNode = leftTreeMaxNode.right;
    }
    deleteNode(preleftNode, <number>leftTreeMaxNode.value);
    node.value = leftTreeMaxNode.value;
    return root;
  }//有两个节点时，可以用左树的最大结点或者右树的最小结点替代，这里用左树的最大结点
  if (node.left !== null) {
    preNode[status] = node.left;
    return root;
  }
  if (node.right !== null) {
    preNode[status] = node.right;
    return root;
  }
  return root;
};

export { deleteNode };