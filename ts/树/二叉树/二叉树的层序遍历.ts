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
 * @return {number[][]}
 * 使用队列来进行处理
 * 优化:
 * 1.这里采用了创建一个新队列的方式，可以先记录队列长度，遍历到最后个停止，就可以不用新建队列了
 */
var levelOrder = function (root: TreeNode) {
  let list: TreeNode[] = [];
  let res: (number | string)[][] = []
  if (root) {
    list.push(root);
  }
  while (list.length !== 0) {
    let newList: TreeNode[] = [];
    let arr: (number | string)[] = [];
    for (let item of list) {
      arr.push(item.value);
      if (item.left !== null) {
        newList.push(item.left);
      }
      if (item.right !== null) {
        newList.push(item.right);
      }
    }
    list = newList;
    res.push(arr);
  }
  return res;
};

export { levelOrder };