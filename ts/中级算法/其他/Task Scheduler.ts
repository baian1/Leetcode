/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * 分两种情况，会出现空闲的情况，不会出现空闲的情况
 * 1.不会出现空闲的情况长度就是任务数
 * 每个空间都被填满
 * 2.会出现空闲的情况长度就是在执行最多任务时会出现的空闲
 * 例子 AAABBB n=2
 * A B - A B - A B
 * 每组长度都是n+1，最后一组长度不需要空余
 */
const leastInterval = function (tasks: string[], n: number): number {
  let map: { [index: string]: number } = {};
  for (let item of tasks) {
    if (map[item] === undefined) {
      map[item] = 1;
    } else {
      map[item]++;
    }
  }
  let arr: string[] = [];
  let max: number = 0;
  for (let i in map) {
    if (map[i] > max) {
      arr = [i];
    } else if (map[i] === max) {
      arr.push(i);
    }
  }

  return Math.max((max - 1) * (n + 1) + arr.length, tasks.length);
};

export { leastInterval };