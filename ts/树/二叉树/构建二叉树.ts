class TreeNode<T extends number | string> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  next: TreeNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

function initTree<T extends number | string>(
  arr: (T | null)[]
): TreeNode<T> | null {
  //所有节点转换成TreeNode节点
  let nodelist: (TreeNode<T> | null)[] = [];
  let length = arr.length;
  for (let i of arr) {
    if (i !== null) {
      nodelist.push(new TreeNode(i));
    } else {
      nodelist.push(null);
    }
  }

  //遍历节点数组，构造搜索二叉树
  for (let i = 0; i < nodelist.length; i++) {
    let curNode = nodelist[i];
    if (curNode instanceof TreeNode) {
      let node = curNode;
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

export { TreeNode, initTree };
