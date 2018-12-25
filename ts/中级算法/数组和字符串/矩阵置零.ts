/**
 * 
 * @param matrix 
 * 1.遍历第一行，确定是否有零需要置第一行为0;
 * 2.遍历下面的几行，使用第一列标志此行是否需要置零
 * 3.遇到0后将第一行的那列置零
 * 4.遍历完成后，再次遍历矩阵，
 *   通过第一行和第一列是否为零，
 *   表示[i][j]位置是否需要置0
 * 5.如果第一行需要是0就置零，不需要就结束
 */
const setZeroes = function(matrix:number[][]):void {
  let i=0;
  let j=0;
  let m=matrix.length;
  let n=matrix[0].length;
  let isZero=false;
  for(j=0;j<n;j++){
    if(matrix[0][j]===0){
      isZero=true;
      break;
    }
  }//第一行0的确定
  for(i=1;i<m;i++){
    for(j=0;j<n;j++){
      if(matrix[i][j]===0){
        matrix[i][0]=0;
        matrix[0][j]=0;
      }
    }
  }//行列0标志位确定
  for(i=1;i<m;i++){
    for(j=n-1;j>=0;j--){
      if(matrix[0][j]===0 || matrix[i][0]===0){
        matrix[i][j]=0;
      }
    }
  }//确定第2行开始的需要是0的位置
  if(isZero===true){
    for(j=0;j<m;j++){
      matrix[0][j]=0;
    }
  }//第一行是否置零
};

let matrix=[[1,0]]
setZeroes(matrix);
