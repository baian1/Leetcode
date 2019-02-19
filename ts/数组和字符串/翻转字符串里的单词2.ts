//给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function (s: string): string {
  let strArr = s.replace(/[ ]+/g, ' ').trim().split(' ');
  let res = '';
  for (let i of strArr) {
    res += i.split('').reverse().join('');
    res += ' ';
  }
  return res.slice(0, res.length - 1);
};

export { reverseWords2 };