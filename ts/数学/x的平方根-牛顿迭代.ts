/**
 * @param {number} x
 * @return {number}
 * 牛顿迭代法
 * 根据牛顿迭代法原理可以得出逼近式子x=(x*x+a)/(x*2);
 * 在不断逼近的时候判断首位是否改变就能得出，
 * 开方的整数部分
 */
var mySqrt2 = function (x: number): number {
  if(x===0){
    return 0;
  }
  let a=x;
  let old=x;
  x=(x*x+a)/(x*2);
  while(Math.floor(x)!==old){
    old=Math.floor(x);
    x=(x*x+a)/(x*2);
  }
  return old;
};
export {mySqrt2};