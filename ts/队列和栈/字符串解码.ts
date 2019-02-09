/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s: string): string {
  let stack: (string | number)[] = [];
  let res = '';
  const num = /[0-9]/;
  const alphabet = /[a-z]/;


  for (let index = 0; index < s.length; index++) {
    if (/[0-9]/.test(s[index])) {
      let num = parseInt(s[index]);
      index++;
      while (/[0-9]/.test(s[index])) {
        num = num * 10 + parseInt(s[index]);
        index++;
      }
      stack.push(num);
    }//获取数字部分存栈
    if (s[index] !== ']') {
      stack.push(s[index]);
      continue;
    }//将[与字母存栈

    let cur = '';
    let flag = stack.pop();
    while (flag !== '[') {
      cur = flag + cur;
      flag = stack.pop();
    }

    let i = parseInt(<string>stack.pop());

    while (i !== 0) {
      stack.push(cur);
      i--;
    }//将数字字母存栈
  }
  return stack.join('');
};

/**
 * @param {string} s
 * @return {string}
 * 利用正则表达式匹配
 */
var decodeString2 = function(s:any) {
  const regexp = /([0-9]+)\[([a-zA-Z]+)\]/g;
  while (regexp.test(s)) {
      s = s.replace(regexp, (all:any, num:any, letters:any) => letters.repeat(num));
  }
  return s;
};

export { decodeString2 };