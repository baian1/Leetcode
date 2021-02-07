/**
 * 给定一个方阵，其中每个单元(像素)非黑即白。设计一个算法，找出 ***4 条边*** 皆为黑色像素的最大子方阵。
 *
 * 返回一个数组 [r, c, size] ，其中 r, c 分别代表子方阵左上角的行号和列号，size 是子方阵的边长。若有多个满足条件的子方阵，返回 r 最小的，若 r 相同，返回 c 最小的子方阵。若无满足条件的子方阵，返回空数组。
 */
export function findSquare(matrix: number[][]): number[] {
  let row = matrix.length;
  let column = matrix[0].length;
  let countMatrix: [row0: number, column0: number][][] = [];

  let maxPosition = [0, 0, 0];
  for (let i = 0; i < row; i++) {
    countMatrix[i] = new Array(column).fill(0).map(() => [0, 0]);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] === 0) {
        let x = 1;
        let y = 1;
        if (i - 1 >= 0 && countMatrix[i - 1][j][0]) {
          x += countMatrix[i - 1][j][0];
        }
        if (j - 1 >= 0 && countMatrix[i][j - 1][1]) {
          y += countMatrix[i][j - 1][1];
        }
        //更新矩阵
        countMatrix[i][j] = [x, y];
        //计算左上角点是否时0点能构成边
        let size = Math.min(x, y);
        for (let length = size; length > maxPosition[2]; length--) {
          //要找到左上角的点是否有效
          //判断x与y轴方向到底的块存储的数据是否大于size
          if (
            countMatrix[i + 1 - length][j][1] >= length &&
            countMatrix[i][j + 1 - length][0] >= length
          ) {
            maxPosition = [i + 1 - length, j + 1 - length, length];
            break;
          }
        }
      }
    }
  }
  if (maxPosition[2] === 0) {
    return [];
  }
  return maxPosition;
}
