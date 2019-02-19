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
  let flag = 0;
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
    const A = a[aLength - Index];
    const B = b[bLength - Index];
    let cur = Number(A) + Number(B) + flag;
    switch (cur) {
      case 0:
        flag = 0;
        sum = '0' + sum;
        break;
      case 1:
        flag = 0;
        sum = '1' + sum;
        break;
      case 2:
        flag = 1;
        sum = '0' + sum;
        break;
      case 3:
        flag = 1;
        sum = '1' + sum;
        break;
      default:
        break;
    }
    Index++;
  }//先把短的部分加完

  while (flag === 1) {
    const B = b[bLength - Index];
    if (B === '1') {
      sum = '0' + sum;
    } else {
      sum = '1' + sum;
      flag = 0;
    }
    Index++;
  }//额外部分相加

  if (Index === b.length + 1) {
    return sum;
  } else {
    return b.slice(0, bLength - Index + 1) + sum;
  }

};

export { addBinary };