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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 递归写法，不断寻找结点，找到后就返回结点，表示已经找到了
 * 当一个根节点的左右标识位都是找到的时候，这个根结点就是最近的祖先结点
 * 
 * 缺点:1.如果左树是根结点，会将所有右树节点都遍历一遍，往上走还有遍历更多
 * 
 * 优化:改进缺点1，设置一个标识位，来表示是否找到了结点，使用status标识
 */
var lowestCommonAncestor = function (root: TreeNode, p: TreeNode, q: TreeNode) {
  let status=false;
  const dfs = function (root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    if(status){
      return null;
    }
    if (root === null) {
      return null;
    }//没找到结点就返回null
    if (root === p || root === q) {
      return root;
    }//找到了结点就返回结点，表示找到了
    let leftTree = dfs(root.left, p, q);//左树是否找到
    let rightTree = dfs(root.right, p, q);//右树是否找到
    if (leftTree && rightTree) {//左右都找到就是根节点了
      return root;
    } else {
      return leftTree === null ? rightTree : leftTree;//一边没找到那就不是根结点，返回找到
    }
  }
  return dfs(root,p,q);
};

export {lowestCommonAncestor};