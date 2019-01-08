/**
 * @param {number} a
 * @param {number} b
 * @return {number}
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