/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 * 使用队列实现
 * 广度优先遍历
 */
var openLock = function (deadends: string[], target: string) {
  return twoEndBfs(deadends, target);
};

/**
 *
 * @param deadends
 * @param target
 * 单向寻找
 * 优化:
 * 1.old用来存储旧的寻找过的密码
 * 可以合并到dead中，因为遇到他们都是需要跳过的
 * 功能相同
 */
const oneEndBfs = function (deadends: string[], target: string) {
  const dead = new Set(deadends);
  const old = new Set();
  let cur = "0000";
  if (dead.has(cur)) {
    return -1;
  }
  old.add(cur);
  let curlist: string[] = [];
  curlist.push(cur);
  let nextList: string[] = [];

  let count = 0;
  while (curlist.length !== 0) {
    let cur = <string>curlist.pop();
    if (cur === target) {
      return count;
    }
    let Near = getNext(cur);
    for (let i of Near) {
      if (!old.has(i) && !dead.has(i)) {
        old.add(i);
        nextList.push(i);
      }
    }
    if (curlist.length === 0) {
      curlist = nextList;
      nextList = [];
      count++;
    }
  }
  return -1;
};

/**
 *
 * @param deadends
 * @param target
 * 双向寻找，如果节点会在某处相遇，那么这个时候他们会有相同的节点存在
 */
const twoEndBfs = function (deadends: string[], target: string) {
  let begin = new Set(["0000"]);
  let end = new Set([target]);
  let dead = new Set(deadends);
  let count = 0;
  while (begin.size > 0 && end.size > 0) {
    if (begin.size > end.size) {
      let temp;
      temp = begin;
      begin = end;
      end = temp;
    } //保证我们寻找的是密码数较少的方向
    let temp: Set<string> = new Set(); //下层密码
    for (let i of begin) {
      if (end.has(i)) {
        return count;
      }
      if (dead.has(i)) {
        continue;
      }
      dead.add(i); //当节点不是相遇节点的时候，将节点加入用过节点序列
      let nextList = getNext(i);
      for (let i of nextList) {
        if (!dead.has(i)) {
          temp.add(i);
        } //遇到已经用过的节点，就不添加了
      }
    }
    count++;
    begin = temp;
  }
  return -1;
};

const getNext = function (cur: string): string[] {
  let res: string[] = [];
  for (let i = 0; i < cur.length; i++) {
    let num = parseInt(cur[i]);
    res.push(
      cur.substring(0, i) +
        ((num + 1) % 10).toString() +
        cur.substring(i + 1, 4)
    );
    res.push(
      cur.substring(0, i) +
        ((num + 9) % 10).toString() +
        cur.substring(i + 1, 4)
    );
  }
  return res;
}; //一个密码，转动一次相连的有8个，获取这八个

export { openLock };
