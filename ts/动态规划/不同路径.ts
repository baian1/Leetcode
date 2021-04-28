/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 设置一个矩阵用来表示每个点到达的路径个数
 * 设第一行和第一列都为1
 * 每个点都是相邻两个点相加
 */
var uniquePaths = function(m:number, n:number):number {
  let arr:number[][]=[];

  for(let i=0;i<n;i++){
    arr.push([]);
    arr[i][0]=1;
  }
  for(let j=0;j<m;j++){
    arr[0][j]=1;
  }
  for(let i=1;i<n;i++){
    for(let j=1;j<m;j++){
      arr[i][j]=arr[i-1][j]+arr[i][j-1];
    }
  }
  return arr[m][n];
};

uniquePaths(3,2);