/**
 * 输入grid
 * 1陆地0海洋
 * 1 1 1 0 0
 * 1 0 0 1 0
 * 1 0 0 1 0
 * 解法
 * 通过遍历，遇到岛屿时，将附近土地都置零，表示这是一块土地
 */

/**
 * @param {character[][]} grid
 * @return {number}
 * 队列解法
 */
const numIslands = function (grid: ('1' | '0')[][]): number {
  let list: [number, number][] = [];
  const Maxi = grid.length;
  const Maxj = grid[0].length;
  const bfs = function (i: number, j: number): void {
    list.push([i, j]);
    while (list.length !== 0) {
      let node = <number[]>list.pop();
      let i = node[0];
      let j = node[1];
      grid[i][j] = '0';
      if (i < Maxi - 1 && grid[i + 1][j] === '1') {
        list.push([i + 1, j]);
      }
      if (i > 0 && grid[i - 1][j] === '1') {
        list.push([i - 1, j])
      }
      if (j < Maxj - 1 && grid[i][j + 1] === '1') {
        list.push([i, j + 1]);
      }
      if (j > 0 && grid[i][j - 1] === '1') {
        list.push([i, j - 1]);
      }
    }
  }
  let count = 0;
  for (let i = 0; i < Maxi; i++) {
    for (let j = 0; j < Maxj; j++) {
      if (grid[i][j] === '1') {
        bfs(i, j);
        count++;
      }
    }
  }
  return count;
};

/**
 * @param {character[][]} grid
 * @return {number}
 * 递归解法,深度优先遍历
 */
const numIslands2 = function (grid: ('1' | '0')[][]): number {
  const dfs = function (grid: ('1' | '0')[][], i: number, j: number, Maxi: number, Maxj: number): void {
    if (i < 0 || i === Maxi || j < 0 || j === Maxj || grid[i][j] === "0") {
      return;
    }
    grid[i][j] = '0';
    dfs(grid, i + 1, j, Maxi, Maxj);
    dfs(grid, i, j + 1, Maxi, Maxj);
    dfs(grid, i - 1, j, Maxi, Maxj);
    dfs(grid, i, j - 1, Maxi, Maxj);
  }
  let count = 0;
  const Maxi = grid.length;
  const Maxj = grid[0].length;
  for (let i = 0; i < Maxi; i++) {
    for (let j = 0; j < Maxj; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j, Maxi, Maxj);
        count++;
      }
    }
  }
  return count;
}

export { numIslands };