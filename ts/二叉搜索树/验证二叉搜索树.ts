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
 * @return {boolean}
 */
var isValidBST = function (root: TreeNode | null): boolean {
  const dfs = function (root: TreeNode | null,min:number|null,max:number|null):boolean {
    if(root===null){
      return true;
    }
    if(min!==null && root.value<=min){
      return false;
    }
    if(max!==null && root.value>=max){
      return false;
    }
    return dfs(root.left,min,<number>root.value) && dfs(root.right,<number>root.value,max);
  }
  return dfs(root,null,null);
};

export { isValidBST };