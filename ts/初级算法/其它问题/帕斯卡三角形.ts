const generate = function(numRows:number) {
  let pascalTriangle:number[][]=[];
  for(let i=0;i<numRows;i++){
    pascalTriangle.push([]);
    for(let j=0;j<=i;j++){
      if(j===0){
        pascalTriangle[i][j]=1;
        continue;
      }
      if(j===i){
        pascalTriangle[i][j]=1;
        continue;
      }
      pascalTriangle[i][j]=pascalTriangle[i-1][j-1]+pascalTriangle[i-1][j];
    }
  }
  return pascalTriangle;
};
generate(6);