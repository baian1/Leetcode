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
 * @param {number} key
 * @return {TreeNode}
 * 迭代
 */
type fangxiang = 'right' | 'left';
var deleteNode = function (root: TreeNode, key: number) {
  if (root === null) {
    return null;
  }
  let node: TreeNode | null = root;//要删除的结点
  let preNode: TreeNode | null = null;//要删除结点的根结点
  let status: fangxiang = 'left';//被删除结点是根结点的左节点还是右节点
  while (node) {
    if (node.value > key) {
      preNode = node;
      status = 'left';
      node = node.left
    } else if (node.value === key) {
      break;
    } else {
      preNode = node;
      status = 'right';
      node = node.right;
    }
  }
  if (node === null) {
    return root;
  }//如果不存在这个结点，那就直接返回根结点
  if (preNode === null && (node.left===null || node.right===null)) {
    return node.left === null ? node.right : node.left;
  }//如果要删除的是根(root)结点且根结点只有一个左树或右树
  if (node.left === null && node.right === null) {
    (<TreeNode>preNode)[status] = null;
    return root;
  }//要删除的是叶节点
  if (node.left !== null && node.right !== null) {
    let leftTreeMaxNode = node.left;
    let preleftNode: TreeNode = node;
    while (leftTreeMaxNode.right) {
      preleftNode = leftTreeMaxNode;
      leftTreeMaxNode = leftTreeMaxNode.right;
    }
    deleteNode(preleftNode, <number>leftTreeMaxNode.value);
    node.value = leftTreeMaxNode.value;
    return root;
  }//有两个节点时，可以用左树的最大结点或者右树的最小结点替代，这里用左树的最大结点
  (<TreeNode>preNode)[status] = node.right===null?node.left:node.right;
  return root;
};

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 * 递归,每次都返回树结点
 */
const deleteNode2=function(root: TreeNode|null, key: number):null|TreeNode {
  if(root===null){
    return null;
  }
  if(root.value>key){//寻找结点
    root.left=deleteNode2(root.left,key);
  }else if(root.value<key){
    root.right=deleteNode2(root.right,key);
  }else{
    if(root.left!==null && root.right!==null){
      let leftMax=root.left;
      while(leftMax.right){
        leftMax=leftMax.right
      }
      root.value=leftMax.value;
      root.left=deleteNode2(root.right,<number>leftMax.value);
    }//寻找左树最大值替换根结点
    else{
      return root.left===null?root.right:root.left;
    }//如果是单子树的结点，返回结点，叶节点返回null;
  }
  return root;
}

export { deleteNode2 as deleteNode };