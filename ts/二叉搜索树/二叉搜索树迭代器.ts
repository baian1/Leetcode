import { TreeNode } from "../二叉树/构建二叉树";
import { inorderTraversal } from "../二叉树/二叉树的中序遍历";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
interface BSTIterator {
  list:number[];
  start:number;
  next():number;
  hasNext():boolean;
}
class BSTIterator {
  constructor(root:TreeNode){
    this.list=<number[]>inorderTraversal(root);
    this.start=0;
  }

  next(){
    let value=this.list[this.start]
    if(this.start<this.list.length){
      this.start++
    }else{
      return 0;
    }
    return value;
  }

  hasNext(){
    if(this.start<this.list.length){
      return true;
    }
    return false;
  }
}


/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */