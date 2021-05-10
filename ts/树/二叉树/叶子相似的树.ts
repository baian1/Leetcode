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

import { TreeNode as TreeNodeT } from "./构建二叉树";

type TreeNode = TreeNodeT<number>;
export function leafSimilar(
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean {
  //中序遍历所有节点
  function dfs(root: TreeNode | null, seq: number[]) {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      seq.push(root.value);
    }
    dfs(root.left, seq);
    dfs(root.right, seq);
  }
  let seq1: number[] = [];
  dfs(root1, seq1);
  let seq2: number[] = [];
  dfs(root2, seq2);
  if (seq1.length !== seq2.length) {
    return false;
  }
  for (let i = 0; i < seq1.length; i++) {
    if (seq2[i] !== seq1[i]) {
      return false;
    }
  }
  return true;
}
