/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid: number[][]) {
  let arr: Int32Array[] = [];
  for (let i = 0; i < grid.length; i++) {
    let row: Int32Array = new Int32Array(grid[0].length);
    if (i === 0) {
      for (let j = 0; j < grid[i].length; j++) {
        row[j] = grid[i][j] + (row[j - 1] === undefined ? 0 : row[j - 1]);
      }
    } else {
      row[0] = arr[i - 1][0] + grid[i][0];
    }
    arr.push(row);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i * j === 0) {
        continue;
      }
      let min = Math.min(arr[i - 1][j], arr[i][j - 1]);
      arr[i][j] = min + grid[i][j];
    }
  }

  return arr[arr.length - 1][arr[0].length - 1];
};


/**
 * @param {number[][]} grid
 * @return {number}
 * 优化存储到一维数组
 */

const Max = Math
export const minPathSum2 = function (grid: number[][]) {
  let arr: Int32Array = new Int32Array(grid[0].length);

  for (let i = 0; i < grid.length; i++) {
    if (i === 0) {
      grid[i].forEach((value, index) => {
        if (index === 0) {
          arr[index] = value;
        } else {
          arr[index] = value + arr[index - 1];
        }
      })
    } else {
      for (let j = 0; j < grid[0].length; j++) {
        let min = Math.min(arr[j - 1] === undefined ? arr[j] : arr[j - 1], arr[j])
        arr[j] = min + grid[i][j];
      }
    }
  }

  return arr[arr.length - 1];
};