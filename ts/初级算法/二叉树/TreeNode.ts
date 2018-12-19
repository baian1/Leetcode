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

function initTree(arr:any[]){
  if(arr[0]===undefined){
    return null;
  }
  let node=new TreeNode(arr[0]);
  arr.shift();

  if(arr)

  return node;
}

let a=initTree([1,2,3]);
