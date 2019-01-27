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
 * @param {number} val
 * @return {TreeNode}
 * 递归
 */
var insertIntoBST = function (root: TreeNode | null, val: number):TreeNode {
  if (root === null) {
    return new TreeNode(val);
  }
  const dfs = function (node: TreeNode, val: number) {
    if (node.right !== null && val > node.value) {
      dfs(node.right, val);
    } else if (node.right === null && val > node.value) {
      node.right = new TreeNode(val);
    }
    if (node.left !== null && val < node.value) {
      dfs(node.left, val);
    } else if (node.left === null && val < node.value) {
      node.left = new TreeNode(val);
    }
  }
  dfs(root, val);
  return root;
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * 迭代
 */
var insertIntoBST = function (root: TreeNode | null, val: number):TreeNode {
  if(root===null){
    return new TreeNode(val);
  }
  let node=root;
  while(node){
    if(node.value>val){
      if(node.left===null){
        node.left=new TreeNode(val);
      }else{
        node=node.left;
      }
    }
    if(node.value<val){
      if(node.right===null){
        node.right=new TreeNode(val);
      }else{
        node=node.right;
      }
    }
  }
  return root;
};

export { insertIntoBST };