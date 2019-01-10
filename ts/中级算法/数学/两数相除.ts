/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend: number, divisor: number): number {
  let ans = 0;
  let up = Math.abs(dividend);//被除数
  let down = Math.abs(divisor);//除数
  while (up >= down) {
    let count = 1;//除数个数，用来多计算个数
    let base = down;//除数个数*除数，用来判断和相减
    while (up > (base << 1 >>> 0) && up !== base) {
      count <<= 1;//除数数量*2
      base <<= 1;//除数*2
    }
    ans += count;
    up -= base;
  }
  if ((dividend < 0) !== (divisor < 0)) {
    ans = -ans;
  }
  return ans > Math.pow(2, 31) - 1 || ans < -Math.pow(2, 31) ? Math.pow(2, 31) - 1 : ans;
};

export { divide };