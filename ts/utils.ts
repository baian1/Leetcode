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

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(value: number) {
    this.val = value;
    this.next = null;
  }

  toArray() {
    const list: number[] = [];
    let current: ListNode | null = this;
    while (current) {
      list.push(current.val);
      current = current.next;
    }
    return list;
  }

  static newList(nums: number[]) {
    let node = new ListNode(nums[0]);
    let head = node;
    for (let i = 1; i < nums.length; i++) {
      node.next = new ListNode(nums[i]);
      node = node.next;
    }
    return head;
  }
}

export function memoryFn<T extends unknown[], R>(cb: (...params: T) => R) {
  let map: Map<string, R> = new Map();
  return (...params: T) => {
    let key = JSON.stringify(params);
    let resValue = map.get(key);
    if (!resValue) {
      resValue = cb(...params);
      map.set(key, resValue);
    }
    return resValue;
  };
}
