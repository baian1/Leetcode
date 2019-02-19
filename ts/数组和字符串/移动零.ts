/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 双指针解法
 */
var moveZeroes = function(nums:number[]):void {
  let i=0;//迭代数组
  let notZero=0;//迭代非0位置
  for(i;i<nums.length;i++){
    if(nums[i]===0){
      continue;
    }
    nums[notZero]=nums[i];
    notZero++;
  }
  for(notZero;notZero<nums.length;notZero++){
    nums[notZero]=0;
  }
};