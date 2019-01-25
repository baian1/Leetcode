import { TreeNode } from "./构建二叉树";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * 
 * 使用层序遍历，获得数组，空数组用#表示，最后调整替换为'null'
 */
var serialize = function (root: TreeNode | null): string {
  if (root === null) {
    return '[]';
  }
  let res = [];
  let list: (TreeNode | null)[] = [root];
  while (list.length !== 0) {
    let length = list.length;
    while (length !== 0) {
      let node = <TreeNode | null>list.shift();
      if (node === null) {
        res.push('#');
      } else {
        res.push(node.value);
        list.push(node.left);
        list.push(node.right);
      }
      length--;
    }
  }
  let resStr = res.join(',');
  return `[${resStr}]`.replace(/#/g, 'null').replace(/(,null)*]$/, ']');//调整#为null，去除尾部多余null
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 * 比如 5 4,7 3,null,2,null -1,null,9
 * 
 * 1.先将字符串转换为结点的数组
 * 2.开始遍历结点数组
 * 3.返回根结点
 * 
 * 优化:使用两个指针，未添加左右结点指针cur，未有根结点的指针notHaveRoot
 */
var deserialize = function (data: string): TreeNode | null {
  if (data === '[]') {
    return null;
  }//开头没有就没有了，直接返回就ok

  let arr = data.slice(1, data.length - 1).split(',');
  let list: (TreeNode | null)[] = arr.map((item): TreeNode | null => {
    let value = Number(item);//判断是不是数字
    if (!isNaN(value)) {
      return new TreeNode(value);
    } else {
      return null;
    }
  });//将数字转为节点
  let cur = 0;//未添加左右结点指针
  let notHaveRoot = 1;//未有根结点的指针
  const length = list.length;
  while (notHaveRoot < length) {//不断给cur指针添加左右结点，直到所有结点都有根
    let node = list[cur];
    if (node !== null) {
      node.left = list[notHaveRoot];
      notHaveRoot++;
      node.right = list[notHaveRoot];
      notHaveRoot++;
    }
    cur++;
  }

  return list[0];
};

/**
 * 采用了leetcode的序列化方式
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

export { serialize, deserialize };