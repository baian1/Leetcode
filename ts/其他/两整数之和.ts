/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * 使用亦或操作将0与1位置相加
 * 使用与操作表示1与1位置是1，用<<进位表示相加进位
 */
var getSum = function(a:number, b:number):number {
  if(b===0){
    return a;
  }
  let xor=a^b;
  let carry=(a&b)<<1;
  return getSum(xor,carry);
};

export {getSum};