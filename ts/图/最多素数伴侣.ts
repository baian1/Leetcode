function isPrimeNumber(num: number) {
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * 素数伴侣 匈牙利算法
 * @param inputs
 * @returns
 */
export function maxPrimeMeta(inputs: number[]) {
  let odds: number[] = [];
  let evens: number[] = [];
  for (let i = 0; i < inputs.length; i++) {
    let num = inputs[i];
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }

  if (evens.length < odds.length) {
    let temp = evens;
    evens = odds;
    odds = temp;
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
  function getAllIsMatched(num: number) {
    const isMatchedIndex = [];
    for (let i = 0; i < evens.length; i++) {
      if (evensUsed[i] !== -1 && isPrimeNumber(num + evens[i])) {
        isMatchedIndex.push(i);
      }
    }
    return isMatchedIndex;
  }

  for (let i = 0; i < odds.length; i++) {
    //先寻找空闲的进行匹配
    const evenMatchedIndex = getMatch(odds[i]);
    if (evenMatchedIndex !== -1) {
      evensUsed[evenMatchedIndex] = i;
      continue;
    }

    let loop = 0;
    //当找不到空位置时
    //需要尝试拆散非空的位置
    for (let j = 0; j < evens.length; j++) {
      if (isPrimeNumber(odds[i] + evens[j])) {
        /**
         * 设置某个位置不被使用
         * @param index
         * @returns
         */
        const isLock: boolean[] = new Array(evens.length).fill(false);
        function setEvenUsedEmpty(index: number): boolean {
          const oddIndex = evensUsed[index];
          if (oddIndex === -1) {
            return true;
          }
          const oddNumber = odds[oddIndex];
          //先寻找，能不能有空的位置可以直接挪移的
          const matchedIndex = getMatch(oddNumber);
          if (matchedIndex !== -1) {
            evensUsed[matchedIndex] = oddIndex;
            return true;
          }
          //找不到空的位置了，只能让拆分其他匹配对
          const evensMatchIndex = getAllIsMatched(oddNumber);
          isLock[index] = true;
          for (let j of evensMatchIndex) {
            loop++;
            if (isLock[j] === false && setEvenUsedEmpty(j)) {
              evensUsed[j] = oddIndex;
              return true;
            }
          }
          isLock[index] = false;
          return false;
        }

        const isEmpty = setEvenUsedEmpty(j);
        if (isEmpty) {
          evensUsed[j] = i;
          break;
        }
      }
      loop = 0;
    }
  }
  return evensUsed.filter((v) => v !== -1).length;
}
