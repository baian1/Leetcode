function trap(height: number[]): number {
  //由数组中的接雨水可以知道
  //每个位置都需要计算左右两侧的最高点
  //那先通过一次遍历计算每个位置最高点
  const dp = new Array(height.length).fill(0);
  for (let i = 0; i < height.length; i++) {
    if (i === 0) {
      dp[0] = height[0];
      continue;
    }
    if (height[i] > dp[i - 1]) {
      //找到前面最大的数值，与其配合填平
      dp[i] = height[i];
      const [max, index] = getMax(i);
      const maxHeigt = Math.min(max, height[i]);
      for (let start = index + 1; start < i; start++) {
        dp[start] = maxHeigt;
      }
    } else {
      dp[i] = height[i];
    }
  }

  return dp.reduce((sum, dpH, index) => {
    return (sum += dpH - height[index]);
  }, 0);
  function getMax(end: number) {
    let max = 0;
    let index = 0;
    for (let i = end - 1; i >= 0; i--) {
      if (height[i] > max) {
        max = height[i];
        index = i;
        if (max >= height[end]) {
          break;
        }
      }
    }
    return [max, index];
  }
}

export { trap };
