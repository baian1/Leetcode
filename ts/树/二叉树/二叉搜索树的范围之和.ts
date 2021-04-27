import { TreeNode as TN } from "./构建二叉树";

type TreeNode = TN<number>;

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (root == null) {
    return 0;
  }

  if (root.value > high) {
    return rangeSumBST(root.left, low, high);
  } else if (root.value < low) {
    return rangeSumBST(root.right, low, high);
  } else {
    return (
      root.value +
      rangeSumBST(root.left, low, high) +
      rangeSumBST(root.right, low, high)
    );
  }
}

export { rangeSumBST };
