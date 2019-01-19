/**
 * @param {string[]} tokens
 * @return {number}
 * 使用递归的想法，每次对两个数进行操作
 * 优化:
 * 1.使用一次遍历进行解决
 * 对于逆波兰表达式，如果是数字就进行压栈，遇到符号的时候弹出栈，计算结果并压回去
 */
const evalRPN = function (tokens: string[]): number | string {
  let stack: number[] = []
  for (let i of tokens) {
    if (/[+-/*]$/.test(i)) {
      if (stack.length < 2) {
        continue;
      }
      let a: number = <number>stack.pop();
      let b: number = <number>stack.pop();
      let res = 0;
      switch (i) {
        case '+':
          res = a + b;
          break;
        case '-':
          res = b - a;
          break;
        case '*':
          res = a * b;
          break;
        case '/':
          res = b / a;
          if (res >= 0) {
            res = Math.floor(res);
          } else {
            res = Math.ceil(res);
          }
          break;
        default:
          return 'error';
      }
      stack.push(res);
      continue;
    }
    stack.push(Number(i));
  }
  return stack[0];
};

export { evalRPN };