/**
 *
 * @param nums
 * 设置一个数组isUsed，表示那个位置的数有没有被使用过
 * 遍历数组，遇到没有被使用过的数，使用它
 * 当current存储数组满时添加它
 */
const permute = function (nums: number[]) {
  let isUsed = Array(nums.length).fill(false);
  let list: number[][] = [];
  let current: number[] = [];
  const getlist = function (nums: number[], current: number[]) {
    if (current.length === nums.length) {
      list.push([...current]);
      return;
    }
    let i = 0;
    for (i; i < nums.length; i++) {
      if (!isUsed[i]) {
        current.push(nums[i]);
        isUsed[i] = true;
        getlist(nums, current);
        isUsed[i] = false;
        current.pop();
      }
    }
  };
  getlist(nums, current);
  return list;
};

export const permute2 = (nums: number[]) => {
  //回溯算法

  //为了减少数组拼接操作,创建一个
  const isUsed = new Array(nums.length).fill(false);
  //优先找齐一次,然后回溯
  let resList: number[][] = [];
  let currentList: number[] = [];
  const length = nums.length;
  const walk = () => {
    //一条分钟走到尽头
    if (currentList.length === length) {
      resList.push([...currentList]);
      return;
    }

    //会对nums进行修改,所以需要记录
    for (let i = 0; i < length; i++) {
      if (isUsed[i] === true) {
        continue;
      }
      const num = nums[i];
      //设为已用
      isUsed[i] = true;
      currentList.push(num);
      walk();
      //分支往回走
      currentList.pop();
      isUsed[i] = false;
    }
  };
  walk();
  return resList;
};
const nums6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let star: any = new Date();
permute(nums6);
let end: any = new Date();
console.log(end - star);
