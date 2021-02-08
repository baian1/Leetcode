function getRow(rowIndex: number): number[] {
  let pre: number[] = [1];
  let current: number[] = [];
  for (let k = 0; k < rowIndex; k++) {
    current.push(1);
    for (let i = 0, j = 1; j < pre.length; i++, j++) {
      current[j] = pre[i] + pre[j];
    }
    current.push(1);
    pre = current;
    current = [];
  }
  return pre;
}
