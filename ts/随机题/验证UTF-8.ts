/**
 * @param {number[]} data
 * @return {boolean}
 *    Char. number range  |        UTF-8 octet sequence
 *    (hexadecimal)    |              (binary)
 *--------------------+---------------------------------------------
 *0000 0000-0000 007F | 0xxxxxxx
 *0000 0080-0000 07FF | 110xxxxx 10xxxxxx
 *0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
 *0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
 * 
 */
export const validUtf8 = function (data: number[]) {
  for (let i = 0; i < data.length; i++) {
    let count = findsize(data[i]);
    if (count === 0) {
      return false;
    }
    while (count > 1) {
      i++;
      let high = data[i] & 0xc0;
      if (high === 0x80) {
        count--;
      } else {
        return false;
      }
    }
  }
  return true;
};
/**
 * 
 * @param num 
 * 判断字节长度
 */

const findsize = (num: number) => {
  let high = num & 0x80;
  if (high === 0) {
    return 1;
  }
  let count = 0;
  while (high) {
    num = (num & 0x7f) << 1;
    count += 1;
    high = num & 0x80;
  }
  if (count === 1 || count > 4) {
    return 0;
  }
  return count;
}