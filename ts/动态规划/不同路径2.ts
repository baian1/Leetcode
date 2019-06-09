/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
export const uniquePathsWithObstacles = function (obstacleGrid: (0 | 1)[][]) {
  let arr: Int32Array[] = [];
  obstacleGrid.forEach((item, indexOne) => {
    let row = new Int32Array(item.length);

    if (indexOne !== 0 && arr[indexOne - 1][0] === 0) {
      arr.push(row);
      return;
    }

    for (let i in item) {
      row[i] = item[i] === 0 ? 1 : 0;
      if (row[i] === 0 || indexOne !== 0) {
        break;
      }
    }
    arr.push(row);
    return;
  })

  let i = 0;
  for (i; i < obstacleGrid.length; i++) {
    let j = 0;
    for (j; j < obstacleGrid[i].length; j++) {
      if (i * j === 0) {
        continue;
      }
      if (obstacleGrid[i][j] === 1) {
        arr[i][j] = 0;
      } else {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      }
    }
  }

  return arr[arr.length - 1][arr[0].length - 1];
};