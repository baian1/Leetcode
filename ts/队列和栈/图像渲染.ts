/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 * bfs
 */
var floodFill = function (image: number[][], sr: number, sc: number, newColor: number) {
  let quene: number[][] = [];
  const oldColor = image[sr][sc];
  if (oldColor === newColor || image.length === 0) {
    return image;
  }
  const maxI = image.length;
  const maxJ = image[0].length;//边界条件
  image[sr][sc] = newColor;
  quene.push([sr, sc]);//在入队时就改变像素,避免重复查找
  while (quene.length !== 0) {
    let [i, j] = [...<number[]>quene.shift()];

    //寻找相同颜色像素,改变
    if (i + 1 < maxI && image[i + 1][j] === oldColor) {
      quene.push([i + 1, j]);
      image[i + 1][j] = newColor;
    }
    if (i - 1 >= 0 && image[i - 1][j] === oldColor) {
      quene.push([i - 1, j]);
      image[i - 1][j] = newColor;
    }
    if (j + 1 < maxJ && image[i][j + 1] === oldColor) {
      quene.push([i, j + 1]);
      image[i][j + 1] = newColor;
    }
    if (j - 1 >= 0 && image[i][j - 1] === oldColor) {
      quene.push([i, j - 1]);
      image[i][j - 1] = newColor;
    }
  }
  return image;
};

/**
 * dfs
 */
const floodFill2 = function (image: number[][], sr: number, sc: number, newColor: number) {
  const dfs = function (sr: number, sc: number, target: number, newColor: number) {
    if (sr === -1 || sr === image.length || sc === -1 || sc === image[0].length || image[sr][sc] !== target) {
      return;
    }//超范围,颜色不对,舍去
    image[sr][sc] = newColor;
    dfs(sr - 1, sc, target, newColor);
    dfs(sr + 1, sc, target, newColor);
    dfs(sr, sc - 1, target, newColor);
    dfs(sr, sc + 1, target, newColor);
  }
  const target = image[sr][sc];
  if (target === newColor) {
    return image;
  }
  dfs(sr, sc, target, newColor);
  return image;
}
export { floodFill };