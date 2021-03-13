/**
 *
 * @param s
 */
export function partition(s: string): string[][] {
  function dfs(i: number) {
    if (i === n) {
      ret.push(ans.slice());
      return;
    }
    for (let j = i; j < n; j++) {
      if (f[i][j]) {
        ans.push(s.slice(i, j + 1));
        dfs(j + 1);
        ans.pop();
      }
    }
  }

  //遍历过程中存储的回文数组
  let ans: string[] = [];

  //每次到结尾时，添加的回文
  let ret: string[][] = [];
  //准备所有是回文的子串
  const n = s.length;
  const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      f[i][j] = s[i] === s[j] && f[i + 1][j - 1];
    }
  }
  dfs(0);
  return ret;
}
