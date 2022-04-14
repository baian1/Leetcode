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

  let parentNodeI = 0;
  let nodeI = 1;
  while (nodeI < length) {
    let parentNode = nodelist[parentNodeI];
    if (parentNode === null) {
      parentNodeI++;
      continue;
    }
    let leftNode = nodelist[nodeI] || null;
    let rightNode = nodelist[nodeI + 1] || null;

    parentNode.left = leftNode;
    parentNode.right = rightNode;
    parentNodeI++;
    nodeI += 2;
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
