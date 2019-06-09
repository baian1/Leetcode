/**
 * @param {string} s
 * @return {number}
 * 用栈保存有效括号
 * 
 * 首先我们需要一个边界,指正确括号外面一层套一个括号来记录这片范围
 * 如果时'('压入栈,')'出栈,这时候刷新最长括号长度,比较方式就是通过当前index和栈顶index的差获得
 * 
 * 当stack为空,表示这块括号已经出现错误,开始以此为新起点(边界),寻找新的括号序列
 */
export const longestValidParentheses = function (s: string) {
  let stack: number[] = [-1];
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      let index = stack.pop();
      if (index !== undefined) {
        if (stack.length === 0) {
          stack.push(i);
        } else {
          maxLength = Math.max(maxLength, i - stack[stack.length - 1] - 1);
        }
      }
    }
  }

  return maxLength;
};

/**
 * @param {string} s
 * @return {number}
 * 动态规划解法
 * 寻找到最长括号序列,从第一个开始
 * 
 * 遇到'('表示一个括号起始,设置有效位0
 * 
 * 遇到')'时表示终结,分两种情况
 * 1.前一个是'(',那么就在index-2的基础上加2
 * 2.前一个是')',那么需要根据index-前一个位置有效括号长度,判断那个位置是不是'('
 * 若是就在基础上相加index-前一个位置有效括号长度-1
 * 
 * 若不是就表示这个有效括号块要结束了,设置为0
 */
export const longestValidParentheses2 = function (str: string) {
  let s = str.split('');
  let max = 0;
  let dp = new Int16Array(s.length);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      continue;
    } else {
      if (s[i - 1] === '(') {
        dp[i] = (dp[i - 2] >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + 2 + (dp[i - dp[i - 1] - 2] >= 2 ? dp[i - dp[i - 1] - 2] : 0);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};
