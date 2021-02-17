function minStickers(stickers: string[], target: string): number {
  //计算词语中的字符数
  const dp = new Array(1 << 15).fill(Number.POSITIVE_INFINITY);
  const stickerChar: Map<string, number[]> = new Map();
  //添加字母可能用到的单词,遍历时只用这些单词
  const canUse: Array<Array<string>> = new Array(26).fill(0).map(() => []);
  for (let sticker of stickers) {
    const charTable = new Array(26).fill(0);
    for (let char of sticker) {
      const index = char.codePointAt(0)! - 97;
      charTable[index]++;
      if (canUse[index].indexOf(char)) {
        canUse[index].push(sticker);
      }
    }
    stickerChar.set(sticker, charTable);
  }
  //空字符 0单词
  //逐渐添加target中的字符
  //+1+1
  dp[0] = 0;
  for (let i = 0; i < 1 << target.length; i++) {
    //跳过无法到达的状态
    if (dp[i] === Number.POSITIVE_INFINITY) {
      continue;
    }
    //找到一个0字符
    let p = -1;
    for (let j = 0; j < target.length; j++) {
      if (!(i & (1 << j))) {
        p = j;
        break;
      }
    }
    if (p === -1) {
      break;
    }
    const char = target[p].charCodeAt(0) - 97;
    const list = canUse[char];

    //当前dp的状态
    //遍历词典
    //计算出所有能从当前dp到达的下一个状态
    for (let sticker of list) {
      const stickerCharTable = stickerChar.get(sticker);
      if (stickerCharTable === undefined) {
        throw new Error("不存在的sticker");
      }
      const charsClone = [...stickerCharTable];
      let next = i;
      for (let j = 0; j < target.length; j++) {
        //位1就跳过,寻找0位
        if (next & (1 << j)) {
          continue;
        }
        const charCode = target[j].charCodeAt(0) - 97;
        if (charsClone[charCode] > 0) {
          next += 1 << j;
          charsClone[charCode] = charsClone[charCode] - 1;
        }
      }
      dp[next] = Math.min(dp[next], dp[i] + 1);
    }
  }
  return dp[(1 << target.length) - 1] == Number.POSITIVE_INFINITY
    ? -1
    : dp[(1 << target.length) - 1];
}

export { minStickers };
