class TreeNode {
  value: string | number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value: string | number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
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
 */
var lowestCommonAncestor = function(root:TreeNode|null, p:number, q:number):TreeNode|null {
  let node:TreeNode|null=root;
  while(node){
    if(node.value>p && node.value>q){
      node=node.left;
      continue;
    }
    if(node.value<q && node.value<p){
      node=node.right;
      continue;
    }
    if(node.value===q || node.value===p){
      return node;
    }
    return node;
  }
  return null;
};

export {lowestCommonAncestor};