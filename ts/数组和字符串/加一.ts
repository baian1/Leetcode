/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 * 创建一个新数组保存
 */
var plusOne = function (digits: number[]): number[] {
  let res: number[] = [];
  let i = digits.pop();
  if (i === undefined) {
    return [1];
  } else {
    i++;
  }
  let flag = 0;
  while (i !== undefined) {
    let num = i + flag;
    if (num / 10 >= 1) {
      res.unshift(num % 10);
      flag = 1;
    } else {
      res.unshift(num);
      flag = 0;
    }
    i = digits.pop();
  }
  if (flag === 1) {
    res.unshift(1);
  };
  return res;
};

/**
 * @param {number[]} digits
 * @return {number[]}
 * 在原数组上操作
 */
var plusOne2 = function (digits: number[]): number[] {
  let i = digits.length - 1;
  if (digits[i] === undefined) {
    return [1];
  } else {
    digits[i]++;
  }
  for (i; i > 0; i--) {
    if (digits[i] >= 10) {
      digits[i - 1]++;
      digits[i] = digits[i] % 10;
      continue;
    }
    break;
  }
  if (digits[0] >= 10) {
    digits[0] = digits[0] % 10;
    digits.unshift(1);
  }
  return digits;
}

export { plusOne };