import { TreeNode } from "./构建二叉树";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 从前序与中序遍历构造二叉树的关键是
 * 从前序中找到根节点，然后根据这个节点值，将中序分为左树和右数
 * 比如
 * 前ABDECFG
 * 中DBEAFCG
 * 首先由前序确定根结点A
 * 再由A在中序中的位置，确定
 * 
 * A BDE CFG
 * DBE A FCG
 * 左子树，根结点B，范围D-E
 * 右子树，根结点C，范围F-G
 * 
 * 接下来确定B的根结点，
 * BDE
 * DBE
 * 确定根结点B
 * 分成
 * B D E
 * D B E
 * 
 * 那个范围为一个值的时候，就直接返回结点
 */
var buildTree = function (preorder: number[], inorder: number[]) {
  let node: TreeNode = new TreeNode(preorder[0]);
  const buildTree = function (preorder: number[], inorder: number[], prestart: number, preend: number, instart: number, inend: number): (TreeNode | null) {
    let value=preorder[prestart];

    if(instart===inend){
      return new TreeNode(value);
    }

    let i=instart;
    while(value!==inorder[i]&&i<=inend){
      i++;
    }


    if(i<=inend){
      let node=new TreeNode(value);
      node.left=buildTree(preorder,inorder,prestart+1,prestart+i-instart,instart,i-1);
      node.right=buildTree(preorder,inorder,prestart+i-instart+1,preend,i+1,inend);
      return node;
    }else{
      return null;
    }
  }
  let leftLength=inorder.indexOf(preorder[0]);
  node.left=buildTree(preorder,inorder,1,leftLength,0,leftLength-1);
  node.right=buildTree(preorder,inorder,leftLength+1,preorder.length-1,leftLength+1,inorder.length-1);
  return node;
};

export{buildTree};