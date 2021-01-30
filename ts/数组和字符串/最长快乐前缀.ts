/**
 * 「快乐前缀」是在原字符串中既是 非空 前缀也是后缀（不包括原字符串自身）的字符串。
 * 给你一个字符串 s，请你返回它的 最长快乐前缀。
 * 如果不存在满足题意的前缀，则返回一个空字符串。
 */
export function longestPrefix(s: string): string {
  let longStr = "";
  const length = s.length;
  for (let i = 0; i < s.length; i++) {
    let char1 = s.slice(0, i);
    let char2 = s.slice(length - i, length);
    if (char1 === char2) {
      longStr = char1;
    }
  }
  return longStr;
}

/**
 * KMP的思路解法
 * @param s
 */
export function longestPrefix2(s: string): string {
  if (s.length === 0) {
    return "";
  }
  //记录每个字符的最长快乐数
  const maxMatchLens = [0];
  for (let i = 1; i < s.length; i++) {
    //获得上一个字符串 快乐数后的第一个char 的index
    let maxLen = maxMatchLens[i - 1];
    let currentChar = s[i];
    //判断当前字符串和上一个字符串的快乐数的下一个字符是否相等
    //如果不相等,那就找上一个字符串的第二长快乐数
    while (s[maxLen] !== currentChar && maxLen > 0) {
      maxLen = maxMatchLens[maxLen - 1];
    }
    //判断找没找到字符相等的
    //找到就是前一个快乐前缀+1
    if (s[maxLen] === currentChar) {
      maxLen++;
    } else {
      maxLen = 0;
    }
    maxMatchLens[i] = maxLen;
  }
  return s.slice(0, maxMatchLens[maxMatchLens.length - 1]);
}
