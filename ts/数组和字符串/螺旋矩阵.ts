/**
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照逆时针螺旋顺序，返回矩阵中的所有元素。
 */

/** 
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }
  let i = 0;
  let j = 0;
  let list: number[] = [];
  let maxRow = matrix.length;
  let maxCol = matrix[0].length;
  let preI = 0;
  let preJ = 0;
  while (preI !== maxRow + 1 && preJ !== maxCol + 1) {
    while (i !== maxRow - 1) {
      list.push(matrix[i][j]);
      i++;
    }
    maxRow--;
    while (j !== maxCol - 1) {
      list.push(matrix[i][j]);
      j++;
    }
    maxCol--;
    while (i !== preI) {
      list.push(matrix[i][j]);
      i--;
    }
    preI++;
    while (j > preJ + 1) {
      list.push(matrix[i][j]);
      j--;
    }
    preJ++;
  }
  list.push(matrix[i][j]);
  return list;
};

/**
 * 顺时针
 * @param {number[][]} matrix
 * @return {number[]}
 * 每一次走到底，保留下一次的起始点不进队列，在下次开始时进入
 */
var spiralOrder2 = function (matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }
  let i = 0;
  let j = 0;
  let list: number[] = [];
  let maxRow = matrix.length;
  let maxCol = matrix[0].length;
  let preI = 0;
  let preJ = 0;
  let flag = maxRow * maxCol - 1;
  while (list.length !== flag) {
    while (j !== maxCol - 1) {
      list.push(matrix[i][j]);
      j++;
    }
    maxCol--;//顺时针，左到右行
    if (list.length === flag) {
      break;
    }

    while (i !== maxRow - 1) {
      list.push(matrix[i][j]);
      i++;
    }
    maxRow--;//顺时针，上到下行
    if (list.length === flag) {
      break;
    }

    while (j !== preJ) {
      list.push(matrix[i][j]);
      j--;
    }
    preJ++;//顺时针，右到左行
    if (list.length === flag) {
      break;
    }

    while (i > preI + 1) {
      list.push(matrix[i][j]);
      i--;
    }
    preI++;//顺时针，下到上行
    if (list.length === flag) {
      break;
    }
  }
  list.push(matrix[i][j]);
  return list;
}

export { spiralOrder2 as spiralOrder };