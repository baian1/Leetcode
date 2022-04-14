export function swap(arr: unknown[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export class TreeNode<T extends number | string = number> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  next: TreeNode<T> | null;
  constructor(value: T) {
    this.val = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

export function initTree<
  T extends number | string,
  P extends (T | null)[] = T[]
>(arr: P): P["length"] extends 0 ? null : TreeNode<T> {
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

  return (nodelist[0] ?? null) as any;
}

export function max(...params: number[]) {
  let max = 0;
  for (let num of params) {
    max = Math.max(max, num);
  }
  return max;
}
