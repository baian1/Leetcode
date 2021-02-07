export function strToInt(str: string): number {
  const chars = [];
  let isNegative = false;
  let begin = false;
  for (let char of str) {
    if (begin === false && char === " ") {
      continue;
    }
    if (begin === false && char === "-") {
      begin = true;
      isNegative = true;
      continue;
    }
    if (begin === false && char === "+") {
      begin = true;
      continue;
    }
    if (/[0-9]/.test(char)) {
      chars.push(char);
      begin = true;
      continue;
    }
    break;
  }
  let sum = chars.reduce((sum: number, char: string) => {
    return sum * 10 + char.charCodeAt(0) - 48;
  }, 0);
  sum = isNegative ? -sum : sum;
  if (sum > 2147483647) {
    sum = 2147483647;
  } else if (sum < -2147483648) {
    sum = -2147483648;
  }
  return sum;
}
