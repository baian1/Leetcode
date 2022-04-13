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

//按照 前位数,身高 排序
function reconstructQueue(peoples: number[][]): number[][] {
  let res = new Array();
  let peoplesSort = peoples.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  // 根据前面人数 k,陆续插入数组
  for (let [h, k] of peoplesSort) {
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
  return res;
}

// 按照 身高,前位数 排序
function reconstructQueue2(peoples: number[][]): number[][] {
  // 身高 高->低
  // 位数 低->高
  let peoplesSort = peoples.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  let res = new Array();
  // 根据前面人数 k,陆续插入数组
  for (let p of peoplesSort) {
    if (res.length <= p[1]) {
      res.push(p);
    } else if (res.length > p[1]) {
      res.splice(p[1], 0, p);
    }
  }
  return res;
}

describe("根据身高重建队列", () => {
  it("1", () => {
    expect(
      reconstructQueue2([
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
