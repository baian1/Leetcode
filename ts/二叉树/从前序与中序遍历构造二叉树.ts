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
 * 优化:
 * 构造一个结点，从pre中知道根结点，然后从inorder的一个范围内获取其左右结点
 */
var buildTree = function (preorder: number[], inorder: number[]) {
  const buildTree = function (preorder: number[], inorder: number[], prestart: number,instart: number, inend: number): (TreeNode | null) {
    if(instart>inend){
      return null;
    }//这个范围是-1，表示没有结点存在，返回null
    if(instart===inend){
      return new TreeNode(preorder[prestart]);
    }//只有一个结点了，那就是叶结点，返回就ok

    let node=new TreeNode(preorder[prestart]);//创造根结点
    let i=instart;
    while(inorder[i]!==preorder[prestart] && i<=inend){
      i++;
    }//获取根结点在inorder中的位置，用来分隔左树和右树
    node.left=buildTree(preorder,inorder,prestart+1,instart,i-1);//创造左树
    node.right=buildTree(preorder,inorder,prestart+i-instart+1,i+1,inend);//创造右树，这个右树的根结点可以根据 根结点位置(preorder)+左树的长度(inorder) 来获取
    return node;
  }
  let node: TreeNode|null = buildTree(preorder,inorder,0,0,inorder.length-1);
  return node;
};

export{buildTree};