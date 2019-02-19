/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a: string, b: string): string {
  let list = [];
  let flag: boolean = false;
  let sum = '';
  if (a.length > b.length) {
    let temp;
    temp = a;
    a = b;
    b = temp;
  }//保证a的长度短
  const aLength = a.length - 1;
  const bLength = b.length - 1;
  let Index = 0;
  while (Index !== a.length) {
    if (a[aLength - Index] === '1' && b[bLength - Index] === '1') {
      if (flag === true) {
        sum = '1' + sum;
      } else {
        sum = '0' + sum;
      }
      flag = true;
      Index++;
      continue;
    }//1和1
    if (a[aLength - Index] === '1' || b[bLength - Index] === '1') {
      if (flag === true) {
        sum = '0' + sum;
        flag = true;
      } else {
        sum = '1' + sum;
        flag = false;
      }
      Index++;
      continue;
    }//1和0
    if (flag === true) {
      sum = '1' + sum;
    } else {
      sum = '0' + sum;
    }
    Index++;
    flag = false;//0和0
  }//先把短的部分加完

  while (flag === true) {
    if (b[bLength - Index] === '1') {
      sum = '0' + sum;
      flag = true;
    } else if (b[bLength - Index] === '0') {
      sum = '1' + sum;
      flag = false;
    } else {
      sum = '1' + sum;
      return sum;
    }//长的多出来部分
    Index++;
  }
  return b.slice(0, bLength - Index + 1) + sum;
};

export { addBinary };