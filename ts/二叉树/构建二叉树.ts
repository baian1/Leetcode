class TreeNode {
  value: string | number;
  left: TreeNode | null;
  right: TreeNode | null;
  next: TreeNode | null;
  constructor(value: string | number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

function initTree(arr: any[]) {
  let nodelist: (TreeNode | null)[] = [];
  let length = arr.length;
  for (let i of arr) {
    if (i !== null) {
      nodelist.push(new TreeNode(i));
    } else {
      nodelist.push(null);
    }
  }
  for (let i = 0; i < nodelist.length; i++) {
    if (nodelist[i] instanceof TreeNode) {
      let node = <TreeNode>nodelist[i];
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      if (left < length) {
        node.left = nodelist[left];
      }
      if (right < length) {
        node.right = nodelist[right];
      }
    }
  }
  return nodelist[0];
}

export { TreeNode, initTree }