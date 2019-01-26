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
 * 优化:使用类似迭代遍历的写法,慢慢进行操作,不一下子进行所有结点遍历,而是在next时再添加结点
 */
interface BSTIterator {
  list:TreeNode[];
  next():number;
  hasNext():boolean;
  add(node:TreeNode|null):void;
}
class BSTIterator {
  constructor(root:TreeNode){
    this.list=[];
    this.add(root);
    this.start=0;
  }

  add(node:TreeNode|null){
    while(node){
      this.list.push(node);
      node=node.left;
    }
  }

  next(){
    let node:TreeNode|null=<TreeNode>this.list.pop();
    let value=node.value;
    node=node.right;
    this.add(node);
    return value;
  }

  hasNext(){
    return this.list.length!==0;
  }
}


/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */