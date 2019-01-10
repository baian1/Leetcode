/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 一个个慢慢乘上去
 * 优化
 * 1.分成两部分相乘，可以明显减少运算量
 * 比如5^64成为5^32*5^32可以减少一半运算量
 */
const myPow = function(x:number, n:number):number {
  if(n===0){
    return 1;
  }
  if(n===1){
    return x;
  }
  if(n<0){
    return 1/myPow(x,-n)
  }
  let res:number=x;
  let cur=myPow(x,Math.floor(n/2));
  if(n%2===0){
    return cur*cur;
  }else{
    return res*cur*cur;
  }
};
export {myPow};