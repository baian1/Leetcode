//给定一个字符串，逐个翻转字符串中的每个单词。

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str: string) {
  let strArr: string[] = [];
  let i = 0;
  let j = 0;
  while (str[j] === ' ') {
    j++;
  }
  i = j;
  for (j; j < str.length; j++) {
    if (str[j] === ' ') {
      strArr.push(str.slice(i, j));
      while (str[j] === ' ') {
        j++;
      }
      i = j;
      if (str[j] === undefined) {
        break;
      }
    }
  }
  if (i !== j) {
    strArr.push(str.slice(i, j));
  }
  return strArr.reverse().join(' ');
};

export { reverseWords };