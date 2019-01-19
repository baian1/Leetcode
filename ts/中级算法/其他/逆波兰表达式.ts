/**
 * @param {string[]} tokens
 * @return {number}
 * 使用递归的想法，每次对两个数进行操作
 */
const evalRPN = function (tokens: string[]): number {
  let res: number = 0;
  let pop = tokens.pop();
  if (pop === undefined) {
    return 0;
  }
  switch (pop) {
    case "+":
      res = evalRPN(tokens) + evalRPN(tokens);
      break;
    case "-":
      let subtractor = evalRPN(tokens);
      let subtrahend = evalRPN(tokens);
      res = subtrahend - subtractor;
      break;
    case "*":
      res = evalRPN(tokens) * evalRPN(tokens);
      break;
    case "/":
      let divisor = evalRPN(tokens);
      let dividend = evalRPN(tokens);
      let current = dividend / divisor;
      if(current>=0){
        res=Math.floor(current);
      }else{
        res=Math.ceil(current);
      }
      break;
    default: return parseInt(pop);
  }
  return res;
};

export { evalRPN };