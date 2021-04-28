/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 使用二分查找法
 */
var searchRange = function(nums:number[], target:number):number[] {
  if(nums.length===0){
    return [-1,-1];
  }
  const find=function(nums:number[], target:number, start:number,end:number):number{
    let middle=Math.floor((start+end)/2);
    if(nums[middle]===target){
      return middle;
    }
    if(end===start){
      return middle;
    }
    if(nums[middle]>target){
      return find(nums,target,start,middle);
    }else{
      return find(nums,target,middle+1,end);
    }
  }
  let state=find(nums,target,0,nums.length-1);
  if(nums[state]!==target){
    return [-1,-1];
  }
  let i=state-1;
  let j=state+1;
  while(nums[i]===target){
    i--;
  }
  while(nums[j]===target){
    j++;
  }
  return [i+1,j-1];
};

searchRange([2,2],1);