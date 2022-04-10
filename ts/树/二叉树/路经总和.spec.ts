//路径总和 III
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { initTree, TreeNode } from "@utils";
import { expect } from "chai";

/**
 * 遍历每一种可能
 * @param root
 * @param targetSum
 * @returns
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
  const dfs = (root: TreeNode | null, targetSum: number) => {
    let ret = 0;
    if (root === null) {
      return 0;
    }
    const val = root.value;
    if (root.value === targetSum) {
      ret++;
    }
    ret += dfs(root.left, targetSum - val);
    ret += dfs(root.right, targetSum - val);
    return ret;
  };

  if (root == null) {
    return 0;
  }

  // 根开始的路径
  let ret = dfs(root, targetSum);
  // 左节点开始的路径
  ret += pathSum(root.left, targetSum);
  // 右节点开始的路径
  ret += pathSum(root.right, targetSum);

  return ret;
}

/**
 * 前缀和
 * @param root
 * @param targetSum
 * @returns
 */
function pathSum2(root: TreeNode | null, targetSum: number): number {
  const prefixSumCount = new Map<number, number>();
  prefixSumCount.set(0, 1);

  const dfs = (root: TreeNode | null, curSum: number) => {
    let ret = 0;
    if (root === null) {
      return 0;
    }

    // 添加当前节点
    let sum = curSum + root.value;

    // 获取前缀和，有几条符合就加几条
    ret += prefixSumCount.get(sum - targetSum) || 0;

    prefixSumCount.set(sum, (prefixSumCount.get(sum) || 0) + 1);

    ret += dfs(root.left, sum);
    ret += dfs(root.right, sum);

    // 减去当前节点
    prefixSumCount.set(sum, (prefixSumCount.get(sum) as number) - 1);

    return ret;
  };

  if (root == null) {
    return 0;
  }

  let ret = dfs(root, 0);

  return ret;
}

it("路经总和Ⅲ", () => {
  expect(
    pathSum2(initTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8)
  ).equal(3);
});
