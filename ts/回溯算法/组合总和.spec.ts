import { expect } from "chai";

function combinationSum(candidates: number[], target: number): number[][] {
  let res: number[][] = [];
  let skipMap = new Map<number, number>();
  function dfs(cur: number[], target: number, idx: number) {
    if (target < 0 || idx === candidates.length) {
      return false;
    }
    if (target === 0) {
      res.push([...cur]);
      return true;
    }

    // 判断分支是否要跳过
    if ((skipMap.get(target) || Number.POSITIVE_INFINITY) <= idx) {
      return false;
    }

    // 选中当前数字
    let num = candidates[idx];
    cur.push(num);
    const have1 = dfs(cur, target - num, idx);
    cur.pop();

    // 不选当前数字
    const have2 = dfs(cur, target, idx + 1);

    if (!have1 && !have2) {
      // 有老的，如果idx大，更新为小的
      const oldIdx = skipMap.get(target) || Number.POSITIVE_INFINITY;
      if (idx < oldIdx) {
        skipMap.set(target, idx);
      }
      return false;
    }
    return true;
  }
  dfs([], target, 0);
  return res;
}

function toS(arr: number[][]) {
  arr.map((item) => item.join("-")).sort();
}
it("组合总和", () => {
  const res = combinationSum([2, 3, 6, 7], 7);
  expect(toS(res)).deep.equals(toS([[2, 2, 3], [7]]));
});

it("组合总和2", () => {
  const res = combinationSum([2, 7, 6, 3, 5, 1], 9);
  expect(toS(res)).deep.equals(
    toS([
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 2],
      [1, 1, 1, 1, 1, 1, 3],
      [1, 1, 1, 1, 1, 2, 2],
      [1, 1, 1, 1, 2, 3],
      [1, 1, 1, 1, 5],
      [1, 1, 1, 2, 2, 2],
      [1, 1, 1, 3, 3],
      [1, 1, 1, 6],
      [1, 1, 2, 2, 3],
      [1, 1, 2, 5],
      [1, 1, 7],
      [1, 2, 2, 2, 2],
      [1, 2, 3, 3],
      [1, 2, 6],
      [1, 3, 5],
      [2, 2, 2, 3],
      [2, 2, 5],
      [2, 7],
      [3, 3, 3],
      [3, 6],
    ])
  );
});
