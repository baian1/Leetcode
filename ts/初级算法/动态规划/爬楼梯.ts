/**
 * 
 * @param n 
 * 每个楼梯都是前两个阶级和，创建数组存放减少递归次数
 */
const climbStairs = function(n:number):number {
  if(n===1){
    arr[0]=1;
    return 1;
  }
  if(n===2){
    arr[1]=2;
    return 2;
  }
  if(n>2){
    if(arr[n-1]!==undefined){
      return arr[n-1];
    }
    let num=climbStairs(n-1)+climbStairs(n-2);
    arr[n-1]=num;
    return num;
  }
  return 0;
};
let arr:number[]=[];
console.log(climbStairs(8));