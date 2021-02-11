function trap(height: number[]): number {
  //由数组中的接雨水可以知道
  //每个位置都需要计算左右两侧的最高点
  //那先通过一次遍历计算每个位置最高点
  const dp = new Array(height.length).fill(0);
  //记录前i中最高的位置
  //当遇到起伏时
  //弹出堆栈寻找左边的墙
  const maxHeight: [number, number][] = [];
  for (let i = 0; i < height.length; i++) {
    if (i === 0) {
      dp[0] = height[0];
      maxHeight[0] = [height[0], 0];
      continue;
    }
    dp[i] = height[i];

    //往前寻找边，填充空格
    if (dp[i] > dp[i - 1]) {
      //找到前面最大的数值，与其配合填平
      let maxLine = maxHeight.pop();
      while (
        maxLine !== undefined &&
        maxLine[0] < dp[i] &&
        maxHeight.length > 0
      ) {
        let top = maxHeight.pop()!;
        if (maxLine[0] < top[0]) {
          maxLine = top;
        }
      }
      if (maxLine === undefined) {
        throw new Error("top 不可能为空");
      }
      const [max, index] = maxLine;
      //如果当前边的高较小，需要把前面pop出来的边加回去
      if (max <= maxLine[0]) {
        maxHeight.push(maxLine);
      }
      const maxHeigt = Math.min(max, height[i]);
      for (let start = index + 1; start < i; start++) {
        dp[start] = maxHeigt;
      }
    }

    maxHeight.push([height[i], i]);
  }

  return dp.reduce((sum, dpH, index) => {
    return (sum += dpH - height[index]);
  }, 0);
}

export { trap };
