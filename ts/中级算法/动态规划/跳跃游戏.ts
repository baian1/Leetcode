/**
 * @param {number[]} nums
 * @return {boolean}
 * 使用数组记录每个位置所能到达的最大位置
 */
const canJump = function(nums:number[]):boolean {
  let Max=nums.length-1;
  if(Max===0){
    return true;
  }
  let arr=Array(Max).fill(0);
  arr[0]=nums[0];
  if(arr[0]===0){
    return false;
  }
  for(let i=1;i<nums.length;i++){
    arr[i]=arr[i-1]>nums[i]+i?arr[i-1]:nums[i]+i;//比较这个点和前一个点能到的最大位置，取大的
    if(arr[i]>=Max){
      return true;
    }//能到达尾巴
    if(arr[i]===i){
      return false;
    }//停滞不前了
  }
  return false;
};

canJump([2,0,0]);