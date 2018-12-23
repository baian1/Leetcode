/**
 * 
 * @param n 
 * 涉及有符号数32位
 * 
 * 可以使用*2来表示<<1,+表示末尾是0还是1，
 * 这样不会转换为32位有符号数字
 */
const reverseBits = function(n:number) {
  let revers:number=0;
  let str:string;
  for(let i=0;i<32;i++){
    revers=revers<<1;
    revers=revers|(n & 1);
    n=n>>1;
  }

  return revers>>>0;
};
console.log(reverseBits(0b11111111111111111111111111111101))