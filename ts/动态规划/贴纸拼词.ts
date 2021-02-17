function minStickers(stickers: string[], target: string): number {
  //计算词语中的字符数
  const dp = new Array(1 << 15).fill(Number.POSITIVE_INFINITY);
  const stickerChar: Map<string, number[]> = new Map();
  for (let sticker of stickers) {
    const charTable = new Array(26).fill(0);
    for (let char of sticker) {
      const index = char.codePointAt(0)! - 97;
      charTable[index]++;
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
    //当前dp的状态
    //遍历词典
    //计算出所有能从当前dp到达的下一个状态
    for (const [sticker, chars] of stickerChar.entries()) {
      const charsClone = [...chars];
      let next = i;
      for (let j = 0; j < target.length; j++) {
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
