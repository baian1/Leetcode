function judgeSquareSum(c: number): boolean {
  let low = 0;
  let height = Math.floor(Math.sqrt(c));
  while (low <= height) {
    const sum = Math.pow(low, 2) + Math.pow(height, 2);
    if (sum > c) {
      height--;
    } else if (sum < c) {
      low++;
    } else {
      return true;
    }
  }
  return false;
}
