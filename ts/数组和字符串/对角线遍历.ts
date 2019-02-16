/**
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 有四种情况
 * 超出矩阵的上下左右四条边表示不同转向
 * 每次超出边都需要转向
 *      上边，需要右转
 *    左  [ 1, 2, 3 ] 右边需要向下
 *    边  [ 4, 5, 6 ]
 *    ，  [ 7, 8, 9 ]
 *    需    下边需要向右
 *    要
 *    向
 *    下
 */
var findDiagonalOrder = function (matrix: number[][]): number[] {
  let M = matrix.length;
  let N = matrix[0].length;
  let list: number[] = [];
  let i = 0;
  let j = 0;
  let flag = -1;//每一行遍历结束的时候改变
  while (i + j !== M + N - 2) {
    list.push(matrix[i][j]);
    if (i + flag === -1 && j - flag !== N) {
      j++;
      flag = -flag;
      continue;
    }//超出上边，并且不超出右边
    if (j - flag === -1 && i + flag !== M) {
      i++;
      flag = -flag;
      continue;
    }//超出左边，并且不超出下边
    if (i + flag === M) {
      j++;
      flag = -flag;
      continue;
    }//超出下边
    if (j - flag === N) {
      i++;
      flag = -flag;
      continue;
    }//超出右边
    i += flag;
    j -= flag;
  }
  list.push(matrix[i][j]);
  return list;
};

export { findDiagonalOrder };