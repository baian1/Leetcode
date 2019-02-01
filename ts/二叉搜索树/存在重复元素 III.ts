import { TreeNode } from "../二叉树/构建二叉树";
import { insertIntoBST } from "./Insert into a Binary Search Tree";
import { deleteNode } from "./Delete Node in a BST";

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 * 构建一颗有k个元素的搜索二叉树,然后用要添加的一个值去和树的值比较，这样可以保证序列小于等于k
 * 
 * 在里面寻找添加值与树结点值之差的绝对值是不是有小于等于t
 * 
 * 往后添加现在的这个结点，如果结点多，删除树的一个结点nums[i-k],保证树的节点数为k
 */

var containsNearbyAlmostDuplicate = function (nums: number[], k: number, t: number): boolean {
  if (t < 0 || k <= 0) {
    return false;
  }
  let root: TreeNode | null = new TreeNode(nums[0]);
  let cnt = 1;
  const findNear = function (root: TreeNode | null, value: number, t: number): Boolean {
    if (root === null) {
      return false;
    }
    let dist = Math.abs(<number>root.value - value);
    if (dist <= t) {
      return true;
    } else if (value > root.value) {
      return findNear(root.right, value, t);
    } else {
      return findNear(root.left, value, t);
    }
  }//找到二叉搜索树中的最小差值,如果这个差值小于等于t,就是存在i,j,返回true
  for (let i = 1; i < nums.length; i++) {
    if (findNear(root, nums[i], t)) {
      return true;
    }
    root = insertIntoBST(root, nums[i]);
    cnt++;
    if (cnt === k + 1) {
      root = deleteNode(root, nums[i - k]);
      cnt--;
    }
  }
  return false;
};

export { containsNearbyAlmostDuplicate };