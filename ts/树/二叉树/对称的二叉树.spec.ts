import { TreeNode } from "./构建二叉树";
import { expect } from "chai";
import { it } from "mocha";
import { initTree } from "./构建二叉树";

it("[1,2,2,3,4,4,3]", () => {
  expect(isSymmetric(initTree([1, 2, 2, 3, 4, 4, 3]))).equal(true);
});

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 使用递归
 * 直接遍历判断,深度优先
 * 方法2：可以直接中序遍历，判断是否为回文串
 * 方法3：可以层序遍历，判断是否为回文
 */
var isSymmetric = function (root: TreeNode): boolean {
  const dfs = function (
    left: TreeNode | null,
    right: TreeNode | null
  ): boolean {
    if (left === null && right === null) {
      return true;
    }
    if (
      (left === null && right !== null) ||
      (left !== null && right === null)
    ) {
      return false;
    }
    if (left !== null && right !== null) {
      if (left.value !== right.value) {
        return false;
      }
      if (dfs(left.left, right.right) === false) {
        return false;
      }
      if (dfs(left.right, right.left) === false) {
        return false;
      }
    }
    return true;
  };
  return dfs(root.left, root.right);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * 使用迭代进行判断
 * 同时进行向左向右遍历，同时判断节点值是否相同
 */
var isSymmetric2 = function (root: TreeNode): boolean {
  let state = true;
  let left: TreeNode | null = root.left;
  let right: TreeNode | null = root.right;
  let leftStack: TreeNode[] = [];
  let rightStack: TreeNode[] = [];
  while (state) {
    while (left && right) {
      leftStack.push(left);
      rightStack.push(right);
      left = left.left; //遍历左数
      right = right.right; //遍历右树
    }
    if (
      (left !== null && right === null) ||
      (left === null && right !== null)
    ) {
      state = false;
      break;
    } //结点构造不同，判断不对称
    if (leftStack.length === 0 && rightStack.length === 0) {
      break;
    } //栈清空后，表示查询完毕，退出
    if (left === null && right === null) {
      left = <TreeNode>leftStack.pop();
      right = <TreeNode>rightStack.pop();
      if (left.value !== right.value) {
        state = false;
        break;
      } //节点值不同，判断不对称
      left = left.right;
      right = right.left; //结点转向
    }
  }
  return state;
};

export function isSymmetric3(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  return l_2_r_same(root.left, root.right);
  function l_2_r_same(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left === right) {
      return true;
    }
    if (!left || !right) {
      return false;
    }
    if (left.value === right.value) {
      return (
        l_2_r_same(left.left, right.right) && l_2_r_same(left.right, right.left)
      );
    }
    return false;
  }
}

export { isSymmetric2 as isSymmetric };
