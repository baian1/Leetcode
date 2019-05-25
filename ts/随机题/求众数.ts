/**
 * @param {number[]} nums
 * @return {number}
 * 找出数组中大于n/3的元素
 */
//强解
var majorityElement = function (nums: number[]) {
  let hashMap: Map<number, number> = new Map();
  for (let i of nums) {
    let num = hashMap.get(i);
    if (num !== undefined) {
      hashMap.set(i, num + 1);
    } else {
      hashMap.set(i, 1);
    }
  }
  let key = hashMap.keys();
  let res = [];
  for (let i of key) {
    let value: number = hashMap.get(i) !== undefined ? <number>hashMap.get(i) : 0;
    if (value > nums.length / 3) {
      res.push(i);
    }
  }
  return res;
};

//摩尔投票法
export var majorityElement2 = function (nums: number[]) {
  if (nums.length === 0) {
    return 0;
  }
  let res: [number, number] = [-999, -999];
  let count: [number, number] = [0, 0];
  nums.forEach((value, index) => {
    if (res.indexOf(value) === -1) {
      if (count[0] === 0) {
        res[0] = value;
        count[0]++;
      } else if (count[1] === 0) {
        res[1] = value;
        count[1]++;
      } else {
        count[0]--;
        count[1]--;
      }
    } else {
      let index = res.indexOf(value);
      count[index]++;
    }
  })//找出了数组中最多的两种数字

  //判断数字是否大于n/3
  let count1 = 0;
  let count2 = 0;
  nums.forEach((value) => {
    if (value === res[0]) {
      count1++;
    }
    if (value === res[1]) {
      count2++;
    }
  });

  let newres = [count1 > nums.length / 3 ? res[0] : undefined, count2 > nums.length / 3 ? res[1] : undefined];
  return newres.filter((value) => {
    return value !== undefined;
  })
};