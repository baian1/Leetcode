/**
 * @param {number} n
 * @return {number}
 * bfs,队列
 * 广度优先遍历，找出1次构成的
 * 再找出2次构成的
 */
var numSquares = function (n: number) {
  let map: number[] = [];//存储数字由平方数组成个数
  let pingfanArr: number[] = [];//存储小于等于n的所有平方数
  let count = 1;//每次遍历时，记录数字由多少个平方数构成

  for (let i = 1; i * i <= n; i++) {
    let nums = i * i;
    if (nums === n) {
      return count;
    }
    map[nums] = count;
    pingfanArr.push(nums);
  }//找出平方数

  //初始化
  let cur: number[] = [...pingfanArr];

  while (cur.length !== 0) {
    let nextList = [];
    while (cur.length !== 0) {
      let num = <number>cur.shift();
      for (let i of pingfanArr) {
        let newNum = i + num;
        if (map[newNum] === undefined) {
          nextList.push(newNum);
          map[newNum] = count + 1;
          if (newNum === n) {
            return count + 1;
          }
        }
      }
    }//遍历当前，找出由两个平方数组成的数字
    count++;
    cur = nextList;
  }
  return;
};

/**
 * @param {number} n
 * @return {number}
 * 动态规划
 */
let mem: number[] = [];
var numSquares2 = function (n: number) {
  if (n < 4) {
    return n;
  }//可以观察出来，小于4，组成个数是其本身
  let maxi = Math.floor(Math.sqrt(n));
  let min = Infinity;
  for (let i = maxi; i > 0; i--) {
    let compareMin = mem[n - i * i] || numSquares2(n - i * i);//如果存在直接返回，不存在需要递归计算
    if (compareMin < min) {
      min = compareMin;
      mem[n] = min + 1;//找到最小的并赋值
    }
  }
  return min + 1;
}

export { numSquares2 as numSquares };