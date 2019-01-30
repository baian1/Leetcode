/**
 * 使用搜索二叉树存储数据流
 * https://leetcode-cn.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/66/conclusion/182/
 * 方法的实现
 */

class TreeNode {
  value: string | number;
  left: TreeNode | null;
  right: TreeNode | null;
  cnt: number;
  constructor(value: string | number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.cnt = 1;
  }
}

var insertIntoBST = function (root: TreeNode | null, val: number): TreeNode {
  if (root === null) {
    return new TreeNode(val);
  }
  const dfs = function (node: TreeNode, val: number) {
    if (node.right !== null && val > node.value) {
      node.right.cnt++;
      dfs(node.right, val);
      return;
    } else if (node.right === null && val > node.value) {
      node.right = new TreeNode(val);
      return;
    }
    if (node.left !== null && val <= node.value) {
      node.left.cnt++;
      dfs(node.left, val);
      return;
    } else if (node.left === null && val <= node.value) {
      node.left = new TreeNode(val);
      return;
    }
  }
  root.cnt++;
  dfs(root, val);
  return root;
};

interface KthLargest {
  root: TreeNode | null;
  k: number;
}
class KthLargest {
  constructor(k: number, nums: number[]) {
    this.root = null;
    for (let item of nums) {
      if (this.root) {
        insertIntoBST(this.root, item);
      } else {
        this.root = insertIntoBST(this.root, item);
      }
    }
    this.k = k;
  }
  add(num: number): number | TreeNode | null {
    this.root = insertIntoBST(this.root, num);
    let cur = this.k;
    let node: TreeNode | null = this.root;
    while (cur && node) {//寻找第k大元素
      if (cur === 1 && node.right === null) {
        break;
      }
      if (node.right !== null && cur === node.right.cnt + 1) {
        break;
      }
      if (node.right !== null && node.right.cnt < cur) {
        cur = cur - node.right.cnt - 1;
        node = node.left;
        continue;
      }
      if (node.right !== null && node.right.cnt >= cur) {
        node = node.right;
        continue;
      }
      if (node.right === null) {
        cur--;
        node = node.left;
      }
    }
    return node;
  }
}

export { KthLargest };