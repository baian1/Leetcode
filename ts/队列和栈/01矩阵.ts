/**
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 * 两个相邻元素间的距离为 1 。
 * 首先想到的就是bfs，可以找到最近的
 * 
 * 从每个0开始遍历，
 * 对每个元素都进行一遍寻找，不断更新1的距离
 * 优化思路:
 * 设置矩阵1为无穷大，表示到0很远
 * 
 * 然后遍历每个0更新他到周围1的距离
 * 把周围1加进队列，遍历他到周围1距离
 * 
 * 由于1会重复进队列，使用map记录重复点，进行判定
 * 
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix: number[][]) {
  const maxI = matrix.length;
  const maxJ = matrix[0].length;

  let queue: number[][] = [];
  for (let i = 0; i < maxI; i++) {
    for (let j = 0; j < maxJ; j++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = Infinity;
      } else {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length !== 0) {
    const [i, j] = [...<number[]>queue.shift()];
    if (i - 1 !== -1 && matrix[i][j] + 1 < matrix[i - 1][j]) {
      matrix[i - 1][j] = matrix[i][j] + 1;
      queue.push([i - 1, j])

    }
    if (i + 1 !== maxI && matrix[i][j] + 1 < matrix[i + 1][j]) {
      matrix[i + 1][j] = matrix[i][j] + 1;
      queue.push([i + 1, j])
    }
    if (j - 1 !== -1 && matrix[i][j] + 1 < matrix[i][j - 1]) {
      matrix[i][j - 1] = matrix[i][j] + 1;
      queue.push([i, j - 1])
    }
    if (j + 1 !== maxJ && matrix[i][j] + 1 < matrix[i][j + 1]) {
      matrix[i][j + 1] = matrix[i][j] + 1;
      queue.push([i, j + 1])
    }
  }
  return matrix;
};

export { updateMatrix };