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

  let cur = 1;//标识当前层结点个数，和sum相加为下一层结点的起始位置
  let sum = 0;//标识这一层结点的起始位置
  let i = 0;//用来遍历当前层的指针
  let nextIndexStart = cur + sum;//用来表示还未被指向的结点位置，从1开始的，因为0是根结点
  let nextCur = 0;//一层中有些结点会是null，这些结点在下层没有子节点，用nextCur表示下一层结点个数

  while (nextIndexStart < list.length) {//判断是否还有结点，没有被指向
    let node = list[sum + i];//遍历结点
    if (node === null) {
      i++;//为null结点就直接跳过
    } else {

      node.left = list[nextIndexStart];//TreeNode结点,添加其左右结点
      nextIndexStart++;//每次一个结点被指向，指针向下移动一位
      if (nextIndexStart === list.length) {
        break;
      }//表示所有结点都已经被指向了，可以返回根结点
      node.right = list[nextIndexStart];
      if (nextIndexStart === list.length) {
        break;
      }
      nextIndexStart++;

      nextCur += 2;//记录下一层的结点个数，多了两个
      i++;//遍历下一个结点
    }

    if (i === cur) {//这层遍历结束，开始遍历下一层
      sum += cur;
      cur = nextCur;
      i = 0;
    }
  }

  return list[0];
};

/**
 * 采用了leetcode的序列化方式
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

export { serialize, deserialize };