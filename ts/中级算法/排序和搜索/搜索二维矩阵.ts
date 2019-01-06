/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 根据矩阵行列都是递增的特性
 * 可以先找到列，然后找行
 */
var searchMatrix = function (matrix: number[][], target: number): boolean {
  if (matrix.length === 0) return false;
  const yMax=matrix[0].length-1;
  const xMax=matrix.length-1;
  let x = xMax;
  let y = 0;
  while(x>=0 && y<=yMax){
    if(matrix[x][y]===target){
      return true;
    }else if(matrix[x][y]<target){
      y++;//寻找列
    }else{
      x--;//寻找行
    }
  }
  return false;
};

const matrix2 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
searchMatrix(matrix2, 5);