function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root=new TreeNode(2);
root.left=new TreeNode(1);
root.right=new TreeNode(3);
console.log(root);

const preOrderTraversal=function (root) {
  if(root){
    console.log(root.val);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}

const inOrderTraversal=function (root,List) {
  if(root){
    inOrderTraversal(root.left,List);
    List.push(root.val);
    inOrderTraversal(root.right,List);
  }
}

const isValidBST = function(root) {
  if(root===null){
    return true;
  }
  let List=[];
  inOrderTraversal(root,List);//先序遍历获得结果
  let i=0;//验证是不是升序
  while (i<List.length-1){
    if(List[i]<List[i+1]){
      i++;
    }
    else {
      return false;
    }
  }
  return true;
};
console.log(isValidBST(root));