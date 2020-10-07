import { TreeNode } from "../二叉树/构建二叉树";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 对半分转换
 * 或者可以采用avl数旋转，
 * 这里是有序数列，对半转换
 */
var sortedArrayToBST = function(nums:number[]) {
  const buildTree=function(nums:number[],l:number,r:number):null|TreeNode {
    if(l>r){
      return null;
    }
    if(l===r){
      return new TreeNode(nums[l]);
    }
    let mid=Math.floor((l+r)/2);
    let root=new TreeNode(nums[mid]);
    root.left=buildTree(nums,l,mid-1);
    root.right=buildTree(nums,mid+1,r);
    return root;
  }
  if(nums===null ||nums.length===0){
    return null;
  }
  return buildTree(nums,0,nums.length-1);
};