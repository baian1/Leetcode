function leastBricks(wall: number[][]): number {
  //hash表
  const length = wall[0].reduce((pre, next) => {
    return pre + next;
  }, 0);
  //记录每列的缝隙数量
  let hash: { [index: number]: number } = {};
  //1. 统计每层wall的缝隙位置
  for (let layer of wall) {
    let cur = 0;
    for (let i = 0; i < layer.length - 1; i++) {
      const brick = layer[i];
      cur += brick;
      if (Reflect.has(hash, cur)) {
        hash[cur] += 1;
      } else {
        hash[cur] = 1;
      }
    }
  }
  let max = 0;
  for (let x of Reflect.ownKeys(hash)) {
    const index = (x as any) as number;
    const v = hash[index];
    if (max < v) {
      max = v;
    }
  }
  return wall.length - max;
}
