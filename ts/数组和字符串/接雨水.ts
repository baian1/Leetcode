function trap(height: number[]): number {
  //[0,1,0,2,1,0,1,3,2,1,2,1]
  //接雨水，计算出每个x坐标上的最大位置，然后减去原来该位置高度
  //最大高度由左侧和右侧的最小值决定
  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    const maxHeight = Math.min(getLeftMax(i), getRightMax(i));
    sum += Math.max(0, maxHeight - height[i]);
  }
  return sum;
  function getLeftMax(index: number) {
    let max = 0;
    for (let i = 0; i < index; i++) {
      if (height[i] > max) {
        max = height[i];
      }
    }
    return max;
  }
  function getRightMax(index: number) {
    let max = 0;
    for (let i = index + 1; i < height.length; i++) {
      if (height[i] > max) {
        max = height[i];
      }
    }
    return max;
  }
}

export { trap };
