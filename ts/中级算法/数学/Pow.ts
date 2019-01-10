/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 一个个慢慢乘上去
 */
const myPow = function(x:number, n:number):number {
  if(n===0){
    return 1;
  }
  if(x===1){
    return 1;
  }
  if(x===-1){
    if(n%2===0){
      return 1;
    }
    return -1;
  }
  let res=x;
  if(n>0){
    n--;
    while(n>0){
      res=res*x;
      n--;
    }
    return res;
  }else{
    n++;
    while(n<0){
      res=res*x;
      n++;
    }
    return 1/res;
  }
};
export {myPow};