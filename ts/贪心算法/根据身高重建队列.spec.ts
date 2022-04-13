import { expect } from "chai";
import { describe, it } from "mocha";
/**
 *
 * 假设有打乱顺序的一群人站成一个队列，数组 peoples 表示队列中一些人的属性（不一定按顺序）。
 * 每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。
 * 请你重新构造并返回输入数组 people 所表示的队列。
 * 返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。
 *
 * @param peoples
 * @returns
 */
function reconstructQueue(peoples: number[][]): number[][] {
  // 前的人数 升高数组
  let map = new Map<number, number[]>();
  let res = new Array();

  // 统计
  for (let [h, k] of peoples) {
    let arr = map.get(k) || [];
    arr.push(h);
    map.set(k, arr);
  }

  // 根据前面人数 k,陆续插入数组
  for (let [k, hs] of Array.from(map.entries()).sort((a, b) => a[0] - b[0])) {
    for (let h of hs.sort()) {
      let curK = k;
      let i = 0;
      while (curK !== -1 && res[i]) {
        if (res[i][0] >= h) {
          curK--;
        }
        i++;
      }

      res.splice(i - Math.abs(curK), 0, [h, k]);
    }
  }
  return res;
}
describe("根据身高重建队列", () => {
  it("1", () => {
    expect(
      reconstructQueue([
        [7, 0],
        [4, 4],
        [7, 1],
        [5, 0],
        [6, 1],
        [5, 2],
      ])
    ).deep.equal([
      [5, 0],
      [7, 0],
      [5, 2],
      [6, 1],
      [4, 4],
      [7, 1],
    ]);
  });
});
