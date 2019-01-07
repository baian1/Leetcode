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
 */
const trailingZeroes = function(n:number):number {
  let count=0;
  let i=1; 
  while(Math.pow(5,i)<=n){
    i++;
  }
  i=i-1;
  while(i>0){
    count+=Math.floor(n/Math.pow(5,i));
    i--;
  }
  return count;
};

trailingZeroes(5);