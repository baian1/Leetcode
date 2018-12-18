class TreeNode{
  value:string|number;
  left:TreeNode|null;
  right:TreeNode|null;
  constructor(value:string|number){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}
export default TreeNode;
let a=new TreeNode('sd');
a.left=new TreeNode(2);
