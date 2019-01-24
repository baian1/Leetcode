import { TreeNode } from "./构建二叉树";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder:number[], postorder:number[]):TreeNode|null {
  const buildTree = function (inorder: number[], postorder: number[], poststart: number,instart: number, inend: number): (TreeNode | null) {
    if(inend<instart){
      return null;
    }
    if(inend===instart){
      return new TreeNode(inorder[inend]);
    }
    let node=new TreeNode(postorder[poststart]);
    let i=instart;
    while(inorder[i]!==postorder[poststart] && i<=inend){
      i++;
    }//获取根结点在inorder中的位置，用来分隔左树和右树
    node.right=buildTree(inorder,postorder,poststart-1,i+1,inend);
    node.left=buildTree(inorder,postorder,poststart-(inend-i+1),instart,i-1);
    return node;
  }
  let node: TreeNode|null = buildTree(inorder,postorder,postorder.length-1,0,inorder.length-1);
  return node;
};

export {buildTree};