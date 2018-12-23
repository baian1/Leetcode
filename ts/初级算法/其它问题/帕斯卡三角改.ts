const generate2 = function(numRows:number) {
  let pascalTriangle:number[][]=[[1]];
  for(let i=1;i<numRows;i++){
    pascalTriangle.push([]);
    for(let j=0;j<=i;j++){
      pascalTriangle[i][j]=(pascalTriangle[i-1][j-1] || 0)+(pascalTriangle[i-1][j] || 0)
    }
  }
  return pascalTriangle;
};
generate(6);