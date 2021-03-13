function isPrimeNumber(num: number) {
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * 素数伴侣
 * @param inputs
 * @returns
 */
export function maxPrimeMeta(inputs: number[]) {
  const odds: number[] = [];
  const evens: number[] = [];
  for (let i = 0; i < inputs.length; i++) {
    let num = inputs[i];
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }

  const evensUsed: number[] = new Array(evens.length).fill(-1);
  function getMatch(num: number) {
    for (let i = 0; i < evens.length; i++) {
      if (evensUsed[i] === -1 && isPrimeNumber(num + evens[i])) {
        return i;
      }
    }
    return -1;
  }

  for (let i = 0; i < odds.length; i++) {
    let isMatchEmpty = false;
    //先寻找空闲的进行匹配
    for (let j = 0; j < evens.length; j++) {
      //匹配到空闲
      if (evensUsed[j] === -1 && isPrimeNumber(odds[i] + evens[j])) {
        evensUsed[j] = i;
        isMatchEmpty = true;
        break;
      }
    }

    if (isMatchEmpty) {
      continue;
    }

    for (let j = 0; j < evens.length; j++) {
      if (isPrimeNumber(odds[i] + evens[j])) {
        const oldMatch = evensUsed[j];
        if (oldMatch !== -1) {
          //或取原来odd匹配的，测试有没有其他匹配项
          const evenIndex = getMatch(odds[oldMatch]);
          if (evenIndex !== -1) {
            evensUsed[evenIndex] = oldMatch;
            evensUsed[j] = i;
            break;
          }
        } else {
          evensUsed[j] = i;
          break;
        }
      }
    }
  }
  return evensUsed.filter((v) => v !== -1).length;
}
