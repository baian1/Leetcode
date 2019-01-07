/**
 * @param {number} n
 * @return {number}
 * 找到最大的5的指数
 * 寻找能被指数除后的剩余个数
 * 比如5，25，125
 * 有5个
 * 先被5除，拿出3个
 * 再被25除，拿出2个
 * 再被125除，拿出1个
 * 
 * 优化:
 * 1.将上述过程优化
 * 2.取出n中5的个数后
 * 3.再取出n中25的个数
 * 4.再取出125的个数
 * 5.直到没有为止
 */
const trailingZeroes = function(n:number):number {
  let count=0;
  
  while(n>0){
    n=Math.floor(n/5);
    count+=n;
  }
  return count;
};

trailingZeroes(5);