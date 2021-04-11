export function nthUglyNumber(n: number): number {
  let dp = [0, 1];
  let p2: [index: number, cur: number] = [1, 2];
  let p3: [index: number, cur: number] = [1, 3];
  let p5: [index: number, cur: number] = [1, 5];
  for (let i = 2; i <= n; i++) {
    const min = findMin(p2, p3, p5);
    if (min[1] > dp[i - 1]) {
      dp[i] = min[1];
    } else {
      i--;
    }
    min[0]++;
    switch (min) {
      case p2: {
        min[1] = dp[min[0]] * 2;
        break;
      }
      case p3: {
        min[1] = dp[min[0]] * 3;
        break;
      }
      case p5: {
        min[1] = dp[min[0]] * 5;
        break;
      }
      default: {
        throw new Error("不匹配");
      }
    }
  }
  return dp[n];
  function findMin(
    a: [index: number, cur: number],
    b: [index: number, cur: number],
    c: [index: number, cur: number]
  ) {
    let min: [index: number, cur: number] = [0, 0];
    if (a[1] > b[1]) {
      min = b;
    } else {
      min = a;
    }

    if (min[1] > c[1]) {
      min = c;
    }
    return min;
  }
}
